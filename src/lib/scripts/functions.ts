import ShadowRealm from 'shadowrealm-api';
import { getInstance } from 'quickjs-eval';
import { WebContainer } from '@webcontainer/api';

// Boot a WebContainer
const webcontainer = await WebContainer.boot();

export class Eval {
	static code = `alert('Hello, World!');
'Hello, World!'`;
	static async runFunction(code: string): Promise<any> {
		return eval(code);
	}
}

export class WebWorkers {
	static code = `function recursiveFibonacci(n) {
	    // base case
	    if(n === 0) return 0;
  	    if(n === 1) return 1;
  
  	    // recursion base
  	    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
    }
postMessage(recursiveFibonacci(6)); // should return 8`;
	static async runFunction(code: string): Promise<any> {
		const worker = new Worker(
			URL.createObjectURL(new Blob([code], { type: 'application/javascript' }))
		);

		return new Promise((resolve) => {
			worker.onmessage = (e) => {
				resolve(e.data);
				worker.terminate();
			};
		});
	}
}

export class ShadowRealms {
	static code = `function recursiveFibonacci(n) {
	    // base case
	    if(n === 0) return 0;
  	    if(n === 1) return 1;
  
  	    // recursion base
  	    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
    }
recursiveFibonacci(6); // should return 8`;
	static async runFunction(code: string): Promise<any> {
		const realm = new ShadowRealm();

		return realm.evaluate(code);
	}
}

export class IFrames {
	static code = `alert('Hello, World!');
parent.postMessage('Hello, World!', '*');`;
	static async runFunction(code: string): Promise<any> {
		const iframe = document.createElement('iframe');
		iframe.style.display = 'none';
		document.body.appendChild(iframe);
		iframe.contentWindow?.document.open();
		iframe.contentWindow?.document.write(`<script>${code}</script>`);
		iframe.contentWindow?.document.close();

		// Listen to message from iframe
		return new Promise((resolve) => {
			window.addEventListener('message', function (event) {
				// Make sure the message is from the correct iframe
				if (event.source !== iframe.contentWindow) return;

				// The data sent with postMessage is stored in event.data
				resolve(event.data);
				document.body.removeChild(iframe);
			});
		});
	}
}

export class WASM {
	static code = `function recursiveFibonacci(n) {
	    // base case
	    if(n === 0) return 0;
  	    if(n === 1) return 1;
  
  	    // recursion base
  	    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
    }
recursiveFibonacci(6); // should return 8`;
	static async runFunction(code: string): Promise<any> {
		const instance = await getInstance();

		return instance.eval(code);
	}
}

export class WebContainers {
	static code = `console.log('Hello, World!');`;
	static async runFunction(code: string): Promise<any> {
		// Run the JavaScript code and exit once finished executing
		const process = await webcontainer.spawn('node', ['-e', code]);

		const result = await process.output.getReader().read();

		return result.value;
	}
}

export class ServerVM {
	static code = `function recursiveFibonacci(n) {
	    // base case
	    if(n === 0) return 0;
  	    if(n === 1) return 1;
  
  	    // recursion base
  	    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
    }
recursiveFibonacci(6); // should return 8`;
	static async runFunction(code: string): Promise<any> {
		const url = `${window.location.href}api`;
		const result = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: code,
		});

		return result.json();
	}
}

export class SeparateWindow {
	static code = `alert('Hello, World!');`;
	static async runFunction(code: string): Promise<any> {
		const win = window.open('', '_blank');
		win?.document.write(`<script>${code}</script>`);

		return win;
	}
}
