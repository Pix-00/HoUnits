import React from 'react';
import { List } from 'react-native-paper';
import { connect } from 'react-redux';

import { setMol, setTUnit, setVUnit, setWUnit } from '../slice';

interface ItemProps {
  name: string;
  m: string;
  w: string;
  v: string;
  t: string;
  setMol: (mol: string) => void;
  setWUnit: (wUnit: string) => void;
  setVUnit: (vUnit: string) => void;
  setTUnit: (tUnit: string) => void;
  onDelete: (name: string) => void;
}

function Item({ name, m, w, v, t, onDelete }: ItemProps) {
  const select = () => {
    setMol(m);
    setWUnit(w);
    setVUnit(v);
    setTUnit(t);
  };

  return (
    <List.Item
      title={name}
      description={`S: ${w}/${v}` + (+m > 0 ? ` @ ${m} g/mol` : '') + `  ->  T: ${t}`}
      left={props => < List.Icon {...props} icon="card-bulleted-outline" />}
      onPress={select}
      onLongPress={() => onDelete(name)}
    />
  );
}


export default connect(
  null,
  { fetch, setMol, setWUnit, setVUnit, setTUnit }
)(Item);
