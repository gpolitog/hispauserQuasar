<template>
	<div class="list no-border platform-delimiter">
		<q-drawer-link icon="mail" :to="{path: '/ingresar', exact: true}">
			Ingresar
		</q-drawer-link>

		<q-drawer-link icon="mail" :to="{path: '/registrar', exact: true}">
			Registrar
		</q-drawer-link>

		<q-drawer-link icon="mail" :to="{path: '/usuario', exact: true}">
			usuario
		</q-drawer-link>
		<q-drawer-link icon="mail" :to="{path: '/usuario/productos', exact: true}">
			Productos
		</q-drawer-link>
	</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
