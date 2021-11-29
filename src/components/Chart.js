import React from 'react';
import '../styling/globals.css';

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLine,
  VictoryGroup,
  VictoryLabel,
  VictoryLegend,
} from 'victory';

const Chart = ({ data }) => {
  const conditionData = data;

  return (
    <>
      <VictoryChart height={160} padding={30} width={500}>
        <VictoryLine
          y={() => 1}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 2}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 3}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 4}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 0.2,
            },
          }}
        />
        <VictoryLine
          y={() => 5}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 0.3,
            },
          }}
        />
        <VictoryLine
          y={() => 4.5}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 0.1,
            },
          }}
        />
        <VictoryLine
          y={() => 0.5}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 0.1,
            },
          }}
        />
        <VictoryLine
          y={() => 1.5}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 0.1,
            },
          }}
        />
        <VictoryLine
          y={() => 2.5}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 0.1,
            },
          }}
        />
        <VictoryLine
          y={() => 3.5}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 0.1,
            },
          }}
        />
        <VictoryGroup offset={160 / conditionData.length}>
          <VictoryBar
            data={conditionData}
            x={'assignment'}
            y={'difficultyRating'}
            labels={({ datum }) => {
              if (datum.labels) {
                let label = '';
                datum.labels.forEach((name) => {
                  let labelItem = `${name.name}: ${name.difficultyRating} \n`;
                  label += labelItem;
                });

                return `Moeilijkheid gem.: ${datum.difficultyRating}\n  \n${label}`;
              }
              return `Moeilijkheid beoordeling:${datum.difficultyRating}`;
            }}
            style={{ data: { fill: '#263749' } }}
            barWidth={130 / conditionData.length}
            animate={{
              duration: 700,
              onLoad: { duration: 700 },
            }}
            labelComponent={
              <VictoryTooltip
                flyoutWidth={70}
                pointerLength={9}
                pointerWidth={2}
                flyoutStyle={{
                  stroke: '#ff0000',
                  strokeWidth: 0.2,
                  fill: 'white',
                }}
                style={{
                  fontSize: 5,
                  fill: '#263749',
                }}
              />
            }
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onMouseOver: () => {
                    return [
                      {
                        target: 'data',
                        mutation: () => ({
                          style: {
                            fill: '#ff0000',
                            stroke: 'black',
                            strokeWidth: '0.1',
                          },
                        }),
                      },
                      {
                        target: 'labels',
                        mutation: () => ({
                          active: true,
                        }),
                      },
                    ];
                  },
                  onMouseOut: () => {
                    return [
                      {
                        target: 'data',
                        mutation: () => {},
                      },
                      {
                        target: 'labels',
                        mutation: () => ({
                          active: false,
                        }),
                      },
                    ];
                  },
                },
              },
            ]}
          />
          <VictoryBar
            data={conditionData}
            x={'assignment'}
            y={'enjoymentRating'}
            style={{ data: { fill: '#81c0ff' } }}
            barWidth={130 / conditionData.length}
            animate={{
              duration: 500,
              onLoad: { duration: 500 },
            }}
            labels={({ datum }) => {
              if (datum.labels) {
                let label = '';
                datum.labels.forEach((name) => {
                  let labelItem = `${name.name}: ${name.enjoymentRating} \n`;
                  label += labelItem;
                });
                return `Plezier gem.: ${datum.enjoymentRating}\n \n${label}`;
              }
              return `Plezier beoordeling: ${datum.enjoymentRating}`;
            }}
            labelComponent={
              <VictoryTooltip
                flyoutWidth={60}
                pointerLength={9}
                pointerWidth={1}
                flyoutStyle={{
                  stroke: '#fff600',
                  strokeWidth: 0.2,
                  fill: 'white',
                }}
                style={{
                  fontSize: 5,
                  fill: '#263749',
                }}
              />
            }
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onMouseOver: () => {
                    return [
                      {
                        target: 'data',
                        mutation: () => ({
                          style: {
                            fill: '#fff600',
                            stroke: 'black',
                            strokeWidth: '0.1',
                          },
                        }),
                      },
                      {
                        target: 'labels',
                        mutation: () => ({
                          active: true,
                        }),
                      },
                    ];
                  },
                  onMouseOut: () => {
                    return [
                      {
                        target: 'data',
                        mutation: () => {},
                      },
                      {
                        target: 'labels',
                        mutation: () => ({
                          active: false,
                        }),
                      },
                    ];
                  },
                },
              },
            ]}
          />
        </VictoryGroup>
        <VictoryAxis
          style={{
            ticks: {
              fill: 'transparent',
              size: 2,
              stroke: 'black',
              strokeWidth: 1,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
          }}
          tickLabelComponent={
            <VictoryLabel
              angle={() => {
                return conditionData.length < 16 ? 0 : 60;
              }}
              dx={-8.5}
              dy={-6}
              style={{
                fontSize: 5,
                fill: '#263749',
              }}
              textAnchor={'start'}
            />
          }
        />

        <VictoryAxis
          dependentAxis
          domain={[0, 5]}
          style={{
            tickLabels: {
              fontSize: 5,
              fill: '#263749',
            },
          }}
        />
        <VictoryLegend
          x={200}
          y={10}
          orientation="horizontal"
          data={[
            {
              name: 'Moeilijkheid',
              symbol: { fill: '#263749', type: 'square' },
            },
            {
              name: 'Plezier',
              symbol: { fill: '#81c0ff', type: 'square' },
            },
          ]}
          style={{
            labels: {
              fontSize: 6,
              fill: '#120faa',
            },
          }}
        />
      </VictoryChart>
    </>
  );
};
export default Chart;
