import React from "react";
import styled from "styled-components";
import { Raw, Col } from "components";
import { Work, Preview, Info } from "./components";
import werbek from "assets/works/werbek.png";
import kozubava from "assets/works/kozubava.png";
import bole from "assets/works/bole.png";
import dobrovinsky from "assets/works/dobrovinsky.png";
import ganzorig from "assets/works/ganzorig.png";
import gunnlaugur from "assets/works/gunnlaugur.png";
import lampas from "assets/works/lampas.png";

const Examples = ({ className }) => (
  <div className={className}>
    <Raw>
      <Col size={2}>
        <Work>
          <Preview src={werbek} alt="Baudelaire, Werbek Sophie" />
          <Info
            author="Werbek Sophie"
            title="Baudelaire"
            info="Paper, black ink, 30x40 cm, 2017"
          />
        </Work>
      </Col>
      <Col size={2} offset={1}>
        <Work>
          <Info
            author="Kozubova Nina"
            title="Calligraphic composition"
            info="2005 Paper, brush, 47x76 cm, 2019"
          />
          <Preview
            src={kozubava}
            alt="Calligraphic composition, Kozubova Nina"
          />
        </Work>
      </Col>
      <Col size={2} offset={2}>
        <Work>
          <Preview src={bole} alt="Bole Marie, Where to go, where to run?" />
          <Info
            author="Bole Marie"
            title="Where to go, where to run?"
            info="Ink on paper, 76 x 56 cm, 2016"
          />
        </Work>
      </Col>
    </Raw>
    <div style={{ "margin-top": "150px" }}>
      <Raw>
        <Col size={2} offset={1}>
          <Work second bottom>
            <Info
              second
              author="Brim Gunnlaugur"
              title="Variations"
              info="Linocut, 44, 50x64 cm, 2019"
            />
            <Preview src={gunnlaugur} alt="Variations, Brim Gunnlaugur" />
          </Work>
        </Col>
        <Col size={2} offset={1}>
          <Work second>
            <Preview src={ganzorig} alt="Fire, Alexander Ganzorig" />
            <Info
              second
              author="Alexander Ganzorig"
              title="Fire"
              info="Rice paper, red ink, brush, 60x120 cm, 2017"
            />
          </Work>
        </Col>
        <Col size={2} offset={1}>
          <Work second bottom>
            <Info
              second
              author="Dobrovinsky Evgeny"
              title="Letters from Stockholm"
              info="Serigraphy, original: paper, stylus, 102x72 cm, 2019"
            />
            <Preview
              src={dobrovinsky}
              alt="Letters from Stockholm, Dobrovinsky Evgeny, "
            />
          </Work>
        </Col>
        <Col size={2} offset={1}>
          <div style={{ "margin-top": "-210px" }}>
            <Work second>
              <Preview src={lampas} alt="Baudelaire, Pokras Lampas" />
              <Info
                second
                author="Pokras Lampas"
                title="Vibrations"
                info="Paper, ink, acrylic, feather, brush, 296x216 cm, 2018"
              />
            </Work>
          </div>
        </Col>
      </Raw>
    </div>
  </div>
);

const StyledExamples = styled(Examples)`
  margin-top: 133px;
`;

export default StyledExamples;
