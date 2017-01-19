Check the `packages` folder.

The dependencies go as this:
```text
main -> wrap-a -> dep-a
     \-> dep-b
```

Both `dep-a` and `dep-b` are universal packages.

Now if you run `node packages/main` you'll see the output that mentions _node_ versions of these two modules.

Then if you run `npm run build` and then `node build/bundle.js` you'll see that the bundle has the _browser_ version of the two modules.

So everyhting as expected.