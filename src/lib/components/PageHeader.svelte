<script lang="ts">
	import StrataSourceOnDark from '$lib/images/logos/strata-source-ondark.svg';
</script>

<header>
    <div class="wrapper">
        <a href="/">
            <img src={StrataSourceOnDark} alt="Strata Source Logo" />
        </a>

        <nav>
            <a href="/">Home</a>
            <a href="/news">News</a>
            <a href="https://chaosinitiative.github.io/Wiki/" target="_blank">Wiki</a>
            <a href="https://github.com/ChaosInitiative/qtbase/archive/refs/heads/chaos.zip" target="_blank">Qt Source Code</a>

            <div class="socials">

            </div>
        </nav>
    </div>
</header>

<style lang="scss">
header {
    padding: 50px 0px;

    & .wrapper {
        grid-template-columns: 1fr auto;
        gap: 15px;
        align-items: center;

        & nav {
            display: flex;
            gap: 25px;

            & a {
                font-size: 14px;
                color: #fff;
                text-decoration: none;
                font-weight: bold;
                text-transform: uppercase;
                transition: 0.2s ease-in-out all;

                &:hover {
                    opacity: 0.6;
                }
            }
        }
    }

    & img {
        height: 35px;
    }
}
</style>