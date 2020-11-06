<template>
  <section class="projects-content">
    <h1>My projects</h1>
    <div class="projects-grid">
      <div class="project">
        <div class="project-content">
          <header>
            <div class="first">
              <div class="project-title">
                <h3>Gardencraft</h3>
              </div>
              <div class="project-rep">
                <a href="https://github.com/marianamorais/gardencraft" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
            <div class="project-image">
              <a href="https://gardencraft.netlify.app/" target="_blank">
                <img
                  src="../assets/images/projects/gardencraft.png"
                  alt="Gardencraft"
                />
              </a>
            </div>
          </header>
          <footer>
            <ul class="project-techs">
              <li>JS</li>
              <li>React</li>
              <li>Styled Components</li>
            </ul>
          </footer>
        </div>
      </div>
      <div class="project">
        <div class="project-content">
          <header>
            <div class="first">
              <div class="project-title">
                <h3>Coffelog</h3>
              </div>
               <div class="project-rep">
                <a href="https://github.com/marianamorais/coffeelog" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
            <div class="project-image">
              <a href="https://coffeelog.netlify.app/" target="_blank">
                <img
                  src="../assets/images/projects/coffeelog.png"
                  alt="Coffeelog"
                />
              </a>
            </div>
          </header>
          <footer>
            <ul class="project-techs">
              <li>JS</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less">
@import "../assets/styles/global.less";

.projects-content {
  h1 {
    font-size: 1.8rem;
    text-align: center;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 48px;
    position: relative;
    margin-top: 50px;
    @media (max-width: 768px) {
      text-align: center;
      text-align: -webkit-center;
    }

    .project {
      transition-delay: 0ms;
      visibility: visible;
      opacity: 1;
    
      .project-content {
        width: 243px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        height: 100%;
        padding: 2rem 1.75rem;
        background-color: @light-black;
        transition: @transition;
        border: 1px solid;
        border-image: @gradient;

        header {
          padding: 0;
          margin: 0;
          .first {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0;
            .project-title h3 {
              margin: 0px 0px 20px;
              color: @white-color;
              font-size: 1.2rem;
              letter-spacing: 1px;
              font-weight: 500;
            }
            .project-rep a {
              font-size: 1.2rem;
              color: @white-color;
              transition: @transition;
              cursor: pointer;
              &:hover{
                color: @orange-color;
              }
            }
          }
          .project-image {
            width: 248px;
            height: 175px;
            img {
              border-radius: 4px;
              width: 248px;
              height: 175px;
              z-index: -2;
              
              filter: drop-shadow(0px 0px 0px @light-orange);
              transition: @transition;
              &:hover {
                filter: drop-shadow(2px 2px 2px @light-orange);              
              }
            }
          }
        }
        footer {
          .project-techs {
            display: flex;
            align-items: flex-end;
            -webkit-box-flex: 1;
            flex-grow: 1;
            flex-wrap: wrap;
            padding: 0px;
            margin: 20px 0px 0px;
            list-style: none;

            li {
              margin-right: 15px;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
}
</style>
