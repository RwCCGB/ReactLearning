'use client'
import { useState } from 'react';
 
export default function ShowButton() {
  
 
  return <button onClick={handleClick}>Like ({likes})</button>;
}