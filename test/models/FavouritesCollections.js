import React from 'react';
import ReactDOM from 'react-dom';
import Favourites from '../../src/models/Favourites';
import User from '../../src/models/user';
//Log user in
User.Login({name:"Jude Peter",email:"wapjude@gmail.com", imageUrl:""});
const fav = User.favourites();

describe("Adding to collection", () => {
  it('should return true for adding Tech to collection', () => {
      expect(fav.addCollection("Tech")).toBe(true);
  });
  it('should return true for adding Sport to collection', () => {
      expect(fav.addCollection("Sport")).toBe(true);
  });

  it('should return true for adding Crime to collection', () => {
      expect(fav.addCollection("Crime")).toBe(true);
  });

  it('should return false for adding Tech to collection again', () => {
      expect(fav.addCollection("Tech")).toBe(false);
  });
 });

describe("deleting collection", () => {
  it('should return true for deleting existing Collection ', () => {
      expect(fav.deleteCollection("Tech")).toBe(true);
  });

  it('should return false for deleting non existing Collection ', () => {
      expect(fav.deleteCollection("Tech")).toBe(false);
  });
});

describe("valid collection type", () => {
  it('should return object as typeof collections', () => {
      expect(typeof fav.toString()).toBe("object");

  });
});