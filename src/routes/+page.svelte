<script>
	import Example from '$lib/components/Example.svelte';
	import {
		Eval,
		IFrames,
		SeparateWindow,
		ServerVM,
		ShadowRealms,
		WASM,
		WebContainers,
		WebWorkers,
	} from '$lib/scripts/functions';
</script>

<div class="hero relative min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-2xl">
			<h1 class="text-5xl font-bold">Running User Provided Code in a Browser Environment</h1>
			<p class="py-6">
				In many cases a website company might want to implement a plugin feature to allow
				users to customize their experience. Many website already have a pretty simple
				customization process such as replacing an image with another company logo. However,
				as computers become more powerful and clients expect a more customized experience,
				companies are having a hard time creating a tailor-made experience.
			</p>
			<p class="py-6">
				For this project I created a simple web application that demonstrates different
				methods of running user provided code in a browser environment. I will also list the
				pros and cons of each method to easily compare them and decide which method is best
				for your use case.
			</p>
		</div>
	</div>
	<div class="absolute bottom-6 left-0 right-0">
		<div class="arrows w-12 h-12 mx-auto">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-12 h-12 mx-auto"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 12.59l-5.3-5.3a1 1 0 00-1.4 1.42l6 6a1 1 0 001.4 0l6-6a1 1 0 00-1.4-1.42l-5.3 5.3a1 1 0 01-1.4 0z"
				/>
			</svg>
		</div>
	</div>
</div>

<div class="m-8">
	<Example functionType={Eval}>
		<svelte:fragment slot="title">Eval()</svelte:fragment>

		<svelte:fragment slot="description">
			<h1 class="text-5xl font-bold">Eval()</h1>

			<p class="py-6">
				The eval() function was added in 1995 to Netscape's Navigator 2.0 and expanded upon
				in Navigator 3.0 released in 1996. It allowed for developers to take a string and
				execute it as if it were code. At the time, this method was used to evaluate a JSON
				object to a variable; however, due to major security concerns and the introduction
				of the JSON.parse() method in 2009, eval() fell to the wayside and became replaced.
			</p>

			<p class="py-3 font-semibold">Pros:</p>
			<ul class="mb-3">
				<li>Easy to use</li>
			</ul>

			<p class="py-3 font-semibold">Cons:</p>
			<ul>
				<li>Huge security risk</li>
				<li>Hard to debug</li>
				<li>Performance issues</li>
			</ul>
		</svelte:fragment>

		<svelte:fragment slot="more-information">
			<p class="py-6">
				<strong>Security:</strong> The use of eval() is discouraged because it can make your
				code vulnerable to attacks. However, if you are using eval() for a legitimate
				reason, make sure that the string is sanitized. Never run user provided code with
				eval() unless you are 100% sure that it is safe.

				<br />
				<br />

				<strong>Performance:</strong> The eval() function is slow because it has to parse
				the string and execute the code. It is also not optimized by the JavaScript engine
				because it is not known at JIT compile time.

				<br />
				<br />

				<strong>Debugging:</strong> The use of eval() can make debugging difficult because
				the code is not known at compile time. This means that the code cannot be optimized
				by the JavaScript engine and it is not possible to set breakpoints in the code.

				<br />
				<br />

				<strong>Code Clarity:</strong> The use of eval() can make the code difficult to read
				and understand because the code is not known at compile time. This means that the
				code cannot be optimized by the JavaScript engine and it is not possible to set
				breakpoints in the code.

				<br />
				<br />

				<strong>Sanitization:</strong> If you are using eval() for a legitimate reason, make
				sure that the string is sanitized. Never run user provided code with eval() unless
				you are 100% sure that it is safe.

				<br />
				<br />

				<strong>Alternatives:</strong> There are many alternatives to eval() that are safer
				and more efficient. For example, you can use the Function constructor or the Web
				Workers API.

				<br />
				<br />

				<strong>Conclusion:</strong> The eval() function is slow, insecure, and difficult to
				debug. It is not recommended to use eval() in production code. There are many
				alternatives to eval() that are safer and more efficient.

				<br />
				<br />
				<br />

				<strong>Example:</strong> The following example demonstrates how to use the eval() function
				to run user provided code in a browser environment.
			</p>

			<pre class="bg-base-200 p-4 break-words whitespace-normal">
				let code = 'console.log("Hello World!")';
				<br />
				eval(code);
			</pre>

			<br />

			<p>
				<strong>Output:</strong> The output of the example is "Hello World!" being printed to
				the console.
			</p>
		</svelte:fragment>
	</Example>

	<div class="divider -mx-4" />

	<Example functionType={WebWorkers}>
		<svelte:fragment slot="title">Web Workers</svelte:fragment>

		<svelte:fragment slot="description">
			<h1 class="text-5xl font-bold">Web Workers</h1>

			<p class="py-6">
				Introduced in 2009, web workers allow for JavaScript files to run in the background
				on separate threads. JavaScript is single threaded meaning that all code runs
				sequentially. Because of that, if the running script cannot be segmentized and
				starts hanging, the entire page becomes unresponsive. Buttons will stop working and
				users will not be able to interact with links. Having a second thread in the
				background allows to run complex tasks such as calculating the Fibonacci sequence
				for larger numbers without blocking the main thread and freezing the web
				application. Sadly, not every API is included in web workers. Notably, web workers
				are missing the window and document objects, which prevents them from accessing the
				main document. To find all available APIs available in web workers, please visit
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers"
					target="_blank"
					rel="noreferrer"
					class="link"
				>
					Functions and classes available to Web Workers
				</a>.
			</p>

			<p class="py-3 font-semibold">Pros:</p>
			<ul class="mb-3">
				<li>Concurrency</li>
				<li>Controlled communication</li>
			</ul>

			<p class="py-3 font-semibold">Cons:</p>
			<ul>
				<li>Complexity</li>
				<li>Resource usage</li>
				<li>Limited access</li>
			</ul>
		</svelte:fragment>

		<svelte:fragment slot="more-information">
			<p class="py-6">
				<strong>Performance:</strong> Web Workers can improve the performance of your web
				application by offloading laborious processing to a separate thread. This allows the
				main thread to run without being blocked or slowed down.

				<br />
				<br />

				<strong>Controlled Communications:</strong> Web Workers allow you to communicate
				between threads in a controlled manner. This means that you can send messages
				between threads and handle them in a way that is safe and efficient.

				<br />
				<br />

				<strong>Access to Local Storage:</strong> Web Workers have access to local storage,
				which means that you can store data in the background thread and access it from the
				main thread.

				<br />
				<br />

				<strong>Complexity:</strong> Web Workers can be complex to use because they run in a
				separate thread and do not have access to the Window or Document objects. This means
				that you cannot access the DOM or interact with the user interface directly from a
				Web Worker.

				<br />
				<br />

				<strong>Alternatives:</strong> There are many alternatives to Web Workers that can
				achieve similar results. For example, you can use the Service Workers API or the
				Shadow Realms API.

				<br />
				<br />

				<strong>Conclusion:</strong> Web Workers can improve the performance of your web
				application by offloading laborious processing to a separate thread. They allow you
				to communicate between threads in a controlled manner and have access to local
				storage. However, they can be complex to use and do not have access to the Window or
				Document objects.

				<br />
				<br />
				<br />

				<strong>Example:</strong> The following example demonstrates how to use the Web Workers
				API to run user provided code in a browser environment.
			</p>

			<pre class="bg-base-200 p-4 break-words whitespace-normal">
				{@html `
				let worker = new Worker('worker.js');
				<br />
				worker.postMessage('Hello World!');
				<br />
				worker.onmessage = function (event) {
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('Message received from worker:', event.data);
				<br />
				};
				`}
			</pre>

			<br />

			<p>
				<strong>Output:</strong> The output of the example is "Message received from worker:
				Hello World!" being printed to the console.
			</p>
		</svelte:fragment>
	</Example>

	<div class="divider -mx-4" />

	<Example functionType={ShadowRealms}>
		<svelte:fragment slot="title">ShadowRealms</svelte:fragment>

		<svelte:fragment slot="description">
			<h1 class="text-5xl font-bold">ShadowRealms</h1>

			<p class="py-6">
				The ShadowRealms API represents a significant advancement in the realm of JavaScript
				execution environments, providing a mechanism for isolated evaluation of code within
				a distinct global context. Objects such as
				<code class="bg-base-200 p-1 rounded-lg text-sm">globalThis</code>
				and
				<code class="bg-base-200 p-1 rounded-lg text-sm">Object.prototype</code>
				are available for attackers to exploit. Certain methods of sandboxing and JavaScript
				allowing scripts to override these objects and poses a security risk to websites running
				third-party code. The ShadowRealms API tries to solve this issue by securing and isolating
				code execution for situations such as virtualization, sandboxing systems, or when running
				untrusted code. This API however is still in the candidate stage of the TC39 proposal
				which means that the API is not yet finalized that browsers have not yet implemented
				this API.
			</p>

			<p class="py-3 font-semibold">Pros:</p>
			<ul class="mb-3">
				<li>Isolated execution environment</li>
				<li>Synchronous execution</li>
				<li>Long-term support</li>
			</ul>

			<p class="py-3 font-semibold">Cons:</p>
			<ul>
				<li>Limited direct use</li>
				<li>Potential performance overhead</li>
				<li>Complex error handling</li>
				<li>Experimental Stage</li>
			</ul>
		</svelte:fragment>

		<svelte:fragment slot="more-information">
			<p class="py-6">
				<strong>Isolated Global Environment:</strong> ShadowRealms provide an isolated
				global environment, meaning that code executed within a ShadowRealm does not have
				access to the outer global scope. This isolation enhances security and prevents
				potential interference with the main thread.

				<br />
				<br />

				<strong>Controlled Communications:</strong> Communication between the main realm and
				a ShadowRealm is explicit and controlled. Objects are not shared directly; instead,
				they are copied or transferred, which further enhances security and predictability.

				<br />
				<br />

				<strong>Separate Module Graph:</strong> Each ShadowRealm has its own separate module
				graph. This means that modules imported inside a ShadowRealm are not affected by or
				do not affect modules in the main realm.

				<br />
				<br />

				<strong>Complexity:</strong> ShadowRealms provide powerful isolation capabilities,
				but they also introduce additional complexity. Developers need to carefully manage
				communication between realms and handle potential errors that may arise from this
				isolation.

				<br />
				<br />

				<strong>Alternatives:</strong> While ShadowRealms provide a powerful way to isolate
				JavaScript execution, other alternatives exist. Web Workers, for example, allow you
				to run scripts in the background without blocking the UI. A JavaScript interpreter
				compiled to WebAssembly (Wasm), on the other hand, provides a way to execute
				JavaScript in a sandboxed environment, separate from the main JavaScript engine.

				<br />
				<br />

				<strong>Conclusion:</strong> ShadowRealms offer a unique way to execute JavaScript
				in an isolated environment, enhancing security and preventing interference with the
				main thread. However, they come with their own complexities and may not be the best
				solution for every use case. It's important to consider your specific needs and the
				context of your project when choosing between ShadowRealms and other alternatives.

				<br />
				<br />
				<br />

				<strong>Example:</strong> The following example demonstrates how to use the ShadowRealm
				API to run user provided code in a browser environment.
			</p>

			<pre class="bg-base-200 p-4 break-words whitespace-normal">
				{@html `
				let realm = new ShadowRealm();
				<br />
				let module = realm.evaluate('export default "Hello World!";');
				<br />
				console.log(module.default);
				`}
			</pre>

			<br />

			<p>
				<strong>Output:</strong> The output of the example is "Hello World!" being printed to
				the console.
			</p>
		</svelte:fragment>
	</Example>

	<div class="divider -mx-4" />

	<Example functionType={IFrames}>
		<svelte:fragment slot="title">iFrame</svelte:fragment>

		<svelte:fragment slot="description">
			<h1 class="text-5xl font-bold">iFrame</h1>

			<p class="py-6">
				{"The <iframe> (inline frame) is an HTML element that facilitates the embedding of another HTML document within a parent document. The introduction of the <iframe> provided a more standardized and secure way to embed content. Unlike Adobe Flash or Java Applets, <iframe> content could be rendered natively by the browser without additional software. Over time, the <iframe> became a powerful tool for embedding content and isolating potentially unsafe scripts. The <iframe> element creates a nested browsing context, which isolates the embedded document from the parent document. This isolation is enforced by the browser's same-origin policy, which restricts the interaction between content from different origins. For running untrusted code, <iframe>s can be further secured using the sandbox attribute. This attribute applies extra restrictions, such as blocking form submissions, disabling scripts, and preventing content from affecting the parent document's browsing context. Sadly, there are still issues with sandboxing untrusted code since workarounds allows code running in a <iframe> context to still access the parent window reducing its security effectiveness ."}
			</p>

			<p class="py-3 font-semibold">Pros:</p>
			<ul class="mb-3">
				<li>Standardized embedding</li>
				<li>Isolation</li>
				<li>Sandboxing</li>
			</ul>

			<p class="py-3 font-semibold">Cons:</p>
			<ul>
				<li>Security workaround cases</li>
				<li>Limited interaction</li>
				<li>Performance impact</li>
				<li>Complexity in management</li>
			</ul>
		</svelte:fragment>

		<svelte:fragment slot="more-information">
			<p class="py-6">
				<strong>Convenient:</strong> The iframe HTML element is often used to insert content
				from another source, such as an advertisement, into a web page. However, it can also
				be used to run user provided code in an isolated instance by using the sandbox
				attribute.

				<br />
				<br />

				<strong>Isolated Context:</strong> Iframes provide a completely isolated context for
				scripts, styles, and DOM. This means that code running inside an iframe won't affect
				the parent page, and vice versa.

				<br />
				<br />

				<strong>Low Risk of Affecting Code:</strong> Due to the isolated context, there's a
				low risk of iframes affecting the code on your main page. This makes them a safe
				choice for embedding third-party content.

				<br />
				<br />

				<strong>Complexity:</strong> While iframes can be a bit complex to manage due to
				their isolated nature, modern APIs like postMessage make it easier to communicate
				between the parent page and the iframe.

				<br />
				<br />

				<strong>Alternatives:</strong> Alternatives to iframes include Web Workers and
				ShadowRealms. Web Workers allow you to run scripts in the background without
				blocking the UI, while ShadowRealms provide a way to run JavaScript in an isolated
				environment, separate from the main global scope.

				<br />
				<br />

				<strong>Conclusion:</strong> Iframes are a powerful tool for isolating code and
				embedding content, but they come with some complexity. Depending on your needs,
				other technologies like Web Workers or Shadow DOM might be more appropriate.

				<br />
				<br />
				<br />

				<strong>Example:</strong> The following example demonstrates how to use the iframe element
				to run user provided code in a browser environment.
			</p>

			<pre class="bg-base-200 p-4 break-words whitespace-normal">
				{`<iframe`}
				{@html `
				<br />
				&emsp;&emsp;&emsp;&emsp;srcdoc="&lt;script&gt;console.log('Hello World!');&lt;/script&gt;"
				<br />
				&emsp;&emsp;&emsp;&emsp;sandbox="allow-scripts"
				<br />
				>
				<br />
				`}
				{`</iframe>`}
			</pre>

			<br />

			<p>
				<strong>Output:</strong> The output of the example is "Hello World!" being printed to
				the console.
			</p>
		</svelte:fragment>
	</Example>

	<div class="divider -mx-4" />

	<Example functionType={WASM}>
		<svelte:fragment slot="title">JavaScript WASM Interpreter</svelte:fragment>

		<svelte:fragment slot="description">
			<h1 class="text-5xl font-bold">JavaScript WASM Interpreter</h1>

			<p class="py-6">
				WebAssembly, shortened to WASM, is a binary instruction format designed as a
				compilation target for high-level languages, enabling code execution at near-native
				speeds. Since “WebAssembly provides no ambient access to the computing environment
				in which code is executed”, it creates a layer of security for code to run at high
				performance while keeping security to the developers and end-users. Most JavaScript
				interpreters such as Google's V8 engine, Mozilla's SpiderMonkey, or independent
				projects such as QuickJS can be compiled to WebAssembly allowing them to run within
				the browser. This also allows developers to create new secured contexts to run
				untrusted-code. Sadly, WebAssembly is not perfect since it is vulnerable to side
				channel attacks made on the hardware level. CPU vulnerabilities such as Meltdown or
				Spectre could take advantage of this susceptibility and retrieve data transferred
				between the WebAssembly program and the browser.
			</p>

			<p class="py-3 font-semibold">Pros:</p>
			<ul class="mb-3">
				<li>Security</li>
				<li>Performance</li>
				<li>Portability</li>
				<li>Controlled execution</li>
			</ul>

			<p class="py-3 font-semibold">Cons:</p>
			<ul>
				<li>Hardware vulnerabilities</li>
				<li>Complexity</li>
				<li>Limited functionality</li>
				<li>Resource management</li>
			</ul>
		</svelte:fragment>

		<svelte:fragment slot="more-information">
			<p class="py-6">
				<strong>Performance:</strong> WebAssembly is designed to be fast, and a JavaScript
				interpreter compiled to Wasm can offer significant performance benefits. However,
				the performance may still not match native JavaScript execution in some cases.

				<br />
				<br />

				<strong>Security:</strong> A JavaScript interpreter compiled to WebAssembly (Wasm)
				allows you to run untrusted code in a sandboxed environment. This means that the
				untrusted code can't access or affect the main JavaScript engine or the global
				scope, enhancing security. However, it's still susceptible to hardware
				vulnerabilities like Spectre.

				<br />
				<br />

				<strong>Portability:</strong> WebAssembly is designed to be portable and can run on
				many different types of devices and browsers. This means that a JavaScript
				interpreter compiled to Wasm can run wherever WebAssembly is supported.

				<br />
				<br />

				<strong>Complexity:</strong> Implementing a JavaScript interpreter in WebAssembly
				can be complex and requires a deep understanding of both JavaScript and WebAssembly.
				Managing resources like memory can be more complex, as you need to manually allocate
				and deallocate memory.

				<br />
				<br />

				<strong>Alternatives:</strong> While a JavaScript interpreter compiled to Wasm
				provides a powerful way to run untrusted code, other alternatives exist. Web Workers
				and ShadowRealms, for example, allow you to run scripts in isolated environments.

				<br />
				<br />

				<strong>Conclusion:</strong> A JavaScript interpreter compiled to Wasm offers a
				unique way to execute untrusted JavaScript in a sandboxed environment, enhancing
				security and control. However, it comes with its own complexities and may not be the
				best solution for every use case. It's important to consider your specific needs and
				the context of your project when choosing between this and other alternatives.

				<br />
				<br />
				<br />

				<strong>Example:</strong> The following example demonstrates how to use the WebAssembly
				(WASM) interpreter to run user provided code in a browser environment.
			</p>

			<pre class="bg-base-200 p-4 break-words whitespace-normal">
				{@html `
				import { getInstance } from 'quickjs-eval';
				<br />
				const instance = await getInstance();
				<br />
				const code = "Hello World!";
				<br />
				console.log(instance.eval(code));
				`}
			</pre>

			<br />

			<p>
				<strong>Output:</strong> The output of the example is "Hello World!" being printed to
				the console.
			</p>
		</svelte:fragment>
	</Example>

	<div class="divider -mx-4" />

	<Example functionType={WebContainers}>
		<svelte:fragment slot="title">WebContainer</svelte:fragment>

		<svelte:fragment slot="description">
			<h1 class="text-5xl font-bold">WebContainer</h1>

			<p class="py-6">
				Similar to compiling a JavaScript interpreter to WebAssembly, StackBlitz has created
				WebContainers to solve the problem of running Node.js in the browser. This
				technology is more targeted to create an online integrated development environment
				(IDE). StackBlitz offers web editors like Visual Studio Code offered by Microsoft or
				CodePen. The WebContainers API essentially runs on a micro-operating system based on
				WebAssembly enabling the execution of Node.js environments natively in the browser.
				Sadly, this API only has full support from Chrome. Chromium based browsers “may
				apply restrictive rules by default, and require specific configuration”, Firefox has
				beta support, and Safari has beta support for version 16.4 and above. Mobile web
				browsers have beta support for the API; however, they may run into memory
				limitations due to their constrained environment.
			</p>

			<p class="py-3 font-semibold">Pros:</p>
			<ul class="mb-3">
				<li>In-browser Node.js execution</li>
				<li>Micro-operating system security</li>
			</ul>

			<p class="py-3 font-semibold">Cons:</p>
			<ul>
				<li>Limited browser support</li>
				<li>Mobile limitations</li>
				<li>Performance issues</li>
				<li>Requires secured context</li>
			</ul>
		</svelte:fragment>

		<svelte:fragment slot="more-information">
			<p class="py-6">
				<strong>Speed:</strong> WebContainers run directly in the browser, which means they
				can start up quickly and provide a responsive environment for running untrusted
				code.

				<br />
				<br />

				<strong>Security:</strong> WebContainers provide a secure sandbox for running
				untrusted code. They isolate the code execution from the rest of your system,
				preventing any malicious code from affecting your application or data.

				<br />
				<br />

				<strong>Performance:</strong> WebContainers are designed to be lightweight and
				efficient. They leverage modern browser technologies to provide near-native
				performance for running code.

				<br />
				<br />

				<strong>Alternatives:</strong> While WebContainers provide a powerful way to run
				untrusted code, other alternatives exist. Web Workers, ShadowRealms, and a
				JavaScript interpreter compiled to WebAssembly (WASM) also allow you to run scripts
				in isolated environments.

				<br />
				<br />

				<strong>Conclusion:</strong> WebContainers offer a unique way to execute untrusted
				JavaScript in a sandboxed environment, enhancing security and control. However, they
				come with their own complexities and may not be the best solution for every use
				case. It's important to consider your specific needs and the context of your project
				when choosing between this and other alternatives.

				<br />
				<br />
				<br />

				<strong>Example:</strong> The following example demonstrates how to use WebContainers
				by StackBlitz to run user provided code in a browser environment.
			</p>

			<pre class="bg-base-200 p-4 break-words whitespace-normal">
				{@html `
				const code = 'console.log("Hello World!")';
				<br />
				const process = await webcontainer.spawn('node', ['-e', code]);
				<br />
				const result = await process.output.getReader().read();
				<br />
				console.log(result.value);
				`}
			</pre>

			<br />

			<p>
				<strong>Output:</strong> The output of the example is "Hello World!" being printed to
				the console.
			</p>
		</svelte:fragment>
	</Example>

	<div class="divider -mx-4" />

	<Example functionType={ServerVM}>
		<svelte:fragment slot="title">Server Hosted Virtual Machine</svelte:fragment>

		<svelte:fragment slot="description">
			<h1 class="text-5xl font-bold">Server Hosted Virtual Machine</h1>

			<p class="py-6">
				Virtual machine technology dates back to the 1960s with the development of
				time-sharing systems, such as the Compatible Time-Sharing System (CTSS) which
				allowed multiple users to share mainframe resources. Nowadays, thanks to technology
				such as Docker, users can run containers simulating operating systems, allowing
				users to run code in an isolated environment. Unfortunately, running virtual systems
				on servers can become costly as the service becomes used more and more. This cost
				being put on the developer instead of the client might not fit some business models.
			</p>

			<p class="py-3 font-semibold">Pros:</p>
			<ul class="mb-3">
				<li>Isolation</li>
				<li>Resource efficiency</li>
				<li>Flexibility</li>
				<li>Snapshot and restore</li>
			</ul>

			<p class="py-3 font-semibold">Cons:</p>
			<ul>
				<li>Cost</li>
				<li>Performance overhead</li>
				<li>Security Risks</li>
				<li>Resource intensiveness</li>
			</ul>
		</svelte:fragment>

		<svelte:fragment slot="more-information">
			<p class="py-6">
				<strong>Isolation:</strong> Running untrusted code in a sandbox hosted on the server
				provides a high level of isolation. The code execution is completely separate from
				your main application and user's browser, preventing any potential interference.

				<br />
				<br />

				<strong>Security:</strong> This approach provides a high level of security. The
				untrusted code runs on the server, not on the user's machine, reducing the risk of
				any potential harm to the user's system.

				<br />
				<br />

				<strong>Flexibility:</strong> Server-side sandboxes can be configured to provide the
				exact environment needed for the untrusted code. This includes specific versions of
				languages, libraries, and other dependencies.

				<br />
				<br />

				<strong>Complexity:</strong> This approach can be complex to implement and manage.
				It requires server resources to run the sandbox, and you need to carefully manage
				the communication between the client and the server.

				<br />
				<br />

				<strong>Alternatives:</strong> While running untrusted code in a server-side sandbox
				provides a high level of isolation and security, other alternatives exist. Web
				Workers, ShadowRealms, a JavaScript interpreter compiled to WebAssembly (WASM), and
				WebContainers also allow you to run scripts in isolated environments.

				<br />
				<br />

				<strong>Conclusion:</strong> Running untrusted code in a server-side sandbox
				provides a high level of security and isolation, but it comes with its own
				complexities and resource requirements. It's important to consider your specific
				needs and the context of your project when choosing between this and other
				alternatives.

				<br />
				<br />
				<br />

				<strong>Example:</strong> The following example demonstrates how to use a server-hosted
				virtual machine (VM) to run user provided code in a browser environment.
			</p>

			<pre class="bg-base-200 p-4 break-words whitespace-normal">
				{@html `
				let code = 'console.log("Hello World!")';
				<br />
				let vm = new ServerVM();
				<br />
				vm.run(code);
				`}
			</pre>

			<br />

			<p>
				<strong>Output:</strong> The output of the example is "Hello World!" being printed to
				the console.
			</p>
		</svelte:fragment>
	</Example>

	<div class="divider -mx-4" />

	<Example functionType={SeparateWindow}>
		<svelte:fragment slot="title">Separate Window</svelte:fragment>

		<svelte:fragment slot="description">
			<h1 class="text-5xl font-bold">Separate Window <i>(Desktop App Only)</i></h1>

			<p class="py-6">
				Running user-provided code in separate windows on Electron or Tauri, a method used
				by Visual Studio Code for their extension system, offers several strategic
				advantages. Each window runs in its own process, providing isolation and ensuring
				that errors or crashes in one window do not impact the main application or other
				windows. This approach enhances security by limiting the potential impact of
				malicious or erroneous code through sandboxing techniques. It also allows for
				efficient resource management, as resources used by each piece of code can be
				managed separately. Furthermore, it facilitates debugging and error handling, as
				issues can be caught and handled at the window level, providing useful feedback to
				the user. However, this approach can be complex to set up and manage, may be slower,
				and consume more resources than running code directly.

				<br />
				<br />

				Although this method is only avaible for desktop applications, it is still a
				technically possible option for running user provided code in a browser environment.
				Instead a developer would use the <code class="bg-base-200">window.open()</code> method
				to open a new window and run the user provided code in that window. This method is not
				recommended for web applications since it physically opens a new window and cannot be
				hidden or sandboxed like how Electro or Tauri windows are.
			</p>

			<p class="py-3 font-semibold">Pros:</p>

			<ul class="mb-3">
				<li>Isolation</li>
				<li>Security</li>
				<li>Performance</li>
				<li>Cross-platform</li>
			</ul>

			<p class="py-3 font-semibold">Cons:</p>

			<ul>
				<li>Complexity</li>
				<li>Performance</li>
				<li>Resource consumption</li>
			</ul>
		</svelte:fragment>
	</Example>
</div>

<style>
	@keyframes caret {
		0% {
			opacity: 0;
			transform: translateY(-50px);
		}
		30% {
			opacity: 1;
		}
		50% {
			opacity: 1;
		}
		80% {
			opacity: 0;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(-50px);
		}
	}

	@keyframes caret-mobile {
		0% {
			opacity: 0;
			transform: translateY(-20px);
		}
		30% {
			opacity: 1;
		}
		50% {
			opacity: 1;
		}
		80% {
			opacity: 0;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(-20px);
		}
	}

	.arrows {
		animation: caret 2s ease-in-out infinite;
	}

	@media (max-width: 768px) {
		.arrows {
			animation: caret-mobile 2s ease-in-out infinite;
		}
	}
</style>
