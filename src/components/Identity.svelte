<script>
  import { onMount } from 'svelte'
  import netlifyIdentity from 'netlify-identity-widget';
  export let bind
  onMount(() => {
    if (bind) {
      netlifyIdentity.init({
        //container: '#netlify-modal', // defaults to document.body
        locale: 'en' // defaults to 'en'
      })
    }
    // Open the modal
    //netlifyIdentity.open();

    // Get the current user:
    // Available after on('init') is invoked
    const user = netlifyIdentity.currentUser();

    // Bind to events
    netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.on('login', user => console.log('login', user));
    netlifyIdentity.on('logout', () => console.log('Logged out'));
    netlifyIdentity.on('error', err => console.error('Error', err));
    netlifyIdentity.on('open', () => console.log('Widget opened'));
    netlifyIdentity.on('close', user => {
      console.log('Widget closed')
      user
      .update({ role: 'business' })
      .then((user) => console.log('Updated user %s', user))
      .catch((error) => {
        console.log('Failed to update user: %o', error);
        throw error;
      })
    });

    // Unbind from events
    //netlifyIdentity.off('login'); // to unbind all registered handlers
    //netlifyIdentity.off('login', handler); // to unbind a single handler

    // Close the modal
    //netlifyIdentity.close();

    // Log out the user
    //netlifyIdentity.logout();

    // Refresh the user's JWT
    // Call in on('login') handler to ensure token refreshed after it expires (1hr)  
    // Note: this method returns a promise.
    //netlifyIdentity.refresh().then((jwt)=>console.log(jwt))

    // Change language
    //netlifyIdentity.setLocale('en');

  });
  const signup = () => netlifyIdentity.open('signup')
  const login = () => netlifyIdentity.open('login')
</script>

{#if bind}
<div class="card mx-auto w-fit shadow-xl image-full bg-base-300">
  <div class="card-body">
    <h2 class="card-title">Subscribe to get monthly news</h2>
    <fieldset>
      <button on:click={signup} tabindex="0" class="btn btn-primary flex-none">Sign up</button>
      <button on:click={login} tabindex="0" class="btn btn-primary flex-none">Log in</button>
    </fieldset>
    <fieldset>
      <input id="consent" name="consent" type="checkbox" required class="toggle toggle-sm" />
      <label for="consent">I agree to subscribe to the newsletter.</label> <a href="https://www.urosystem.com/en/privacy-policy" rel="external" target="_blank">See our Privacy Policy</a>
    </fieldset>
  </div>
</div>
{/if}
<!--<div data-netlify-identity-menu class="w-auto image--full"></div>-->
