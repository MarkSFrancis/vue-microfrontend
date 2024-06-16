<template>
  <div :style="{ display: 'flex', 'flex-direction': 'column', 'gap': '0.5rem' }">
    <section>
      <div :style="{ border: 'solid 1px black', padding: '0 1rem' }">
        <SomeComponent />
      </div>
      ^ Hello from base layer
    </section>

    <section>
      <div :style="{ border: 'solid 1px black', padding: '0 1rem' }">
        <HelloWorld>
          <h1>Hello from the app layer!</h1>
        </HelloWorld>
      </div>
      ^ Hello from localbase layer
    </section>
  </div>
</template>
