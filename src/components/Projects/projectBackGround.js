import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Background extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        let config = {
            num: [4, 7],
            rps: 0.2,
            radius: [5, 40],
            life: [1.5, 3],
            v: [2, 3],
            tha: [-40, 40],
            alpha: [0.6, 0],
            scale: [.3, 0.4],
            position: "all",
            color: [ "black" ],
            cross: "dead",
            // emitter: "follow",
            random: 15
        };

        if (Math.random() > 0.85) {
            config = Object.assign(config, {
                onParticleUpdate: (ctx, particle) => {
                    ctx.beginPath();
                    ctx.rect(
                        particle.p.x,
                        particle.p.y,
                        particle.radius * 2,
                        particle.radius * 2
                    );
                    ctx.fillStyle = particle.color;
                    ctx.fill();
                    ctx.closePath();
                }
            });
        }

        return (
            <div>
                <ParticlesBg type="custom" config={config} bg={true} />
            </div>
        );
    }
}
export default Background;