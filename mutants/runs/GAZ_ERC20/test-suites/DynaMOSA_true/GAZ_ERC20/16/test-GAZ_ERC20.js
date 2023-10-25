const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20RcmXrQx = await GAZ_ERC20.new({from: accounts[1]});
		const addressF41zIZV = accounts[0]
		const uintID5NL4i = BigInt("499")
		const addressAyhYHxF = accounts[0]
		const uintShMUnSF = BigInt("733")
		const addressdOnaUuf = accounts[2]
		const uintvyuDnLQ = BigInt("1811")
		const addressyUT5SOd = accounts[0]
		const uintHXokFRk = BigInt("1977")
		const addressFFO0GVG = accounts[5]
		const booliXVJC4B = await GAZ_ERC20RcmXrQx.approve.call(addressF41zIZV, {from: "0x0000000000000000000000000000000000000001"});
		const bool0aihZ2 = await GAZ_ERC20RcmXrQx.transfer.call(addressAyhYHxF, uintID5NL4i, {from: accounts[3]});
		const booljsXiTdy = await GAZ_ERC20RcmXrQx.approve.call(addressdOnaUuf, uintShMUnSF, {from: accounts[1]});
		const boolWy6hTpc = await GAZ_ERC20RcmXrQx.approve.call(addressyUT5SOd, uintvyuDnLQ, {from: accounts[2]});
		const boolVkaMHtC = await GAZ_ERC20RcmXrQx.approve.call(addressFFO0GVG, uintHXokFRk, {from: accounts[3]});

		await expect(GAZ_ERC20RcmXrQx.approve.call(addressF41zIZV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20F5YPPP = await GAZ_ERC20.new({from: accounts[0]});
		const uintceqM3WQ = BigInt("36")
		const addressdTaQFaz = accounts[0]
		const addressIWyBgu2 = accounts[4]
		const uintLaPKeUw = BigInt("1064")
		const addressLaaYImt = accounts[4]
		const addresshodb0qZ = accounts[0]
		const addressDRkF6qZ = accounts[3]
		const boolRXavZYo = await GAZ_ERC20F5YPPP.transferFrom.call(addressIWyBgu2, addressdTaQFaz, uintceqM3WQ, {from: accounts[3]});
		const bool3rFxCY = await GAZ_ERC20F5YPPP.transferFrom.call(addresshodb0qZ, addressLaaYImt, uintLaPKeUw, {from: accounts[2]});
		const booljtowyU = await GAZ_ERC20F5YPPP.approve.call(addressDRkF6qZ, {from: accounts[1]});

		await expect(GAZ_ERC20F5YPPP.transferFrom.call(addressIWyBgu2, addressdTaQFaz, uintceqM3WQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20yg7Bho4 = await GAZ_ERC20.new({from: accounts[1]});
		const addressrNeudv = accounts[3]
		const uinttrbYGPA = BigInt("559")
		const addressrg8XC1q = accounts[3]
		const addressRLN2uG = accounts[0]
		const boolnin7h0G = await GAZ_ERC20yg7Bho4.approve.call(addressrNeudv, {from: accounts[2]});
		const boolFR12rcP = await GAZ_ERC20yg7Bho4.transfer.call(addressrg8XC1q, uinttrbYGPA, {from: accounts[2]});
		const boolOaotXNM = await GAZ_ERC20yg7Bho4.approve.call(addressRLN2uG, {from: accounts[2]});

		await expect(GAZ_ERC20yg7Bho4.approve.call(addressrNeudv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20azDjwjA = await GAZ_ERC20.new({from: accounts[2]});
		const uintrpebh4c = BigInt("1100")
		const addressrjRnFB = accounts[4]
		const uintXWfTIua = BigInt("1290")
		const addresseVQkqcZ = accounts[0]
		const uintpHZh37h = BigInt("1556")
		const addressr5ab0wz = accounts[4]
		const boolRKI5syT = await GAZ_ERC20azDjwjA.transfer.call(addressrjRnFB, uintrpebh4c, {from: accounts[3]});
		const boolOE09N6f = await GAZ_ERC20azDjwjA.transfer.call(addresseVQkqcZ, uintXWfTIua, {from: "0x0000000000000000000000000000000000000001"});
		const boolVS71z8 = await GAZ_ERC20azDjwjA.approve.call(addressr5ab0wz, uintpHZh37h, {from: accounts[1]});

		await expect(GAZ_ERC20azDjwjA.transfer.call(addressrjRnFB, uintrpebh4c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20aaUcgN4 = await GAZ_ERC20.new({from: accounts[1]});
		const uintvozaCI = BigInt("1912")
		const addressF0Jwl4x = accounts[3]
		const uintP7BhS1q = BigInt("1383")
		const addressT6yKozb = accounts[4]
		const addressEoTSAX = accounts[4]
		const uintuf0W1AU = BigInt("147")
		const addressY3G5zC = accounts[3]
		const uintNoBZaK0 = BigInt("1330")
		const addressZDpEdeO = accounts[0]
		const boolSS7TjX = await GAZ_ERC20aaUcgN4.approve.call(addressF0Jwl4x, uintvozaCI, {from: accounts[0]});
		const boolyAsfTSA = await GAZ_ERC20aaUcgN4.approve.call(addressT6yKozb, uintP7BhS1q, {from: accounts[1]});
		const bool8sFOnu = await GAZ_ERC20aaUcgN4.approve.call(addressEoTSAX, {from: accounts[1]});
		const boolvrEb6j = await GAZ_ERC20aaUcgN4.approve.call(addressY3G5zC, uintuf0W1AU, {from: accounts[0]});
		const boolf8wvtka = await GAZ_ERC20aaUcgN4.transfer.call(addressZDpEdeO, uintNoBZaK0, {from: accounts[1]});

		assert.equal(boolSS7TjX, true)
		assert.equal(boolyAsfTSA, true)
		await expect(GAZ_ERC20aaUcgN4.approve.call(addressEoTSAX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20gkWOfi6 = await GAZ_ERC20.new({from: accounts[4]});
		const addressq02Fzn = accounts[1]
		const uintwNJmI1P = BigInt("144")
		const addresso5NuWTn = accounts[2]
		const uintEPZXpTi = BigInt("394")
		const addressvQxC7b = accounts[0]
		const addressKl0oGnL = accounts[1]
		const boolnngm9pH = await GAZ_ERC20gkWOfi6.approve.call(addressq02Fzn, {from: accounts[3]});
		const boolone1FEW = await GAZ_ERC20gkWOfi6.transfer.call(addresso5NuWTn, uintwNJmI1P, {from: accounts[2]});
		const bool0WHogB = await GAZ_ERC20gkWOfi6.transferFrom.call(addressKl0oGnL, addressvQxC7b, uintEPZXpTi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20gkWOfi6.approve.call(addressq02Fzn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20WnWZwX2 = await GAZ_ERC20.new({from: accounts[5]});
		const uintgTA2DO3 = BigInt("436")
		const addressBNsNpwA = "0x0000000000000000000000000000000000000001"
		const addressFz5jrEv = accounts[3]
		const addressGzakHTQ = accounts[3]
		const uintFKmspxs = BigInt("204")
		const addressDYGDEgi = accounts[5]
		const uintkV5xzFE = BigInt("1256")
		const addressXzywS4V = accounts[5]
		const boolIYBrCwD = await GAZ_ERC20WnWZwX2.approve.call(addressBNsNpwA, uintgTA2DO3, {from: accounts[4]});
		const boolkYxNsxj = await GAZ_ERC20WnWZwX2.approve.call(addressFz5jrEv, {from: accounts[5]});
		const boolaoGitX = await GAZ_ERC20WnWZwX2.approve.call(addressGzakHTQ, {from: accounts[4]});
		const boolF8kcWlj = await GAZ_ERC20WnWZwX2.transfer.call(addressDYGDEgi, uintFKmspxs, {from: accounts[3]});
		const boolboEAcv = await GAZ_ERC20WnWZwX2.transfer.call(addressXzywS4V, uintkV5xzFE, {from: accounts[4]});

		assert.equal(boolIYBrCwD, true)
		await expect(GAZ_ERC20WnWZwX2.approve.call(addressFz5jrEv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20F5YPPP = await GAZ_ERC20.new({from: accounts[0]});
		const addresssX7aq5E = accounts[2]
		const uintkfke9sF = BigInt("36")
		const addressb5UdyHD = accounts[0]
		const addressEUOaqVX = accounts[4]
		const uintqcZEyVj = BigInt("1978")
		const addressKXgrLM5 = accounts[4]
		const boolYcw9zVH = await GAZ_ERC20F5YPPP.approve.call(addresssX7aq5E, {from: accounts[0]});
		const boolRXavZYo = await GAZ_ERC20F5YPPP.transferFrom.call(addressEUOaqVX, addressb5UdyHD, uintkfke9sF, {from: accounts[3]});
		const boolsBeCOPh = await GAZ_ERC20F5YPPP.approve.call(addressKXgrLM5, uintqcZEyVj, {from: accounts[5]});

		await expect(GAZ_ERC20F5YPPP.approve.call(addresssX7aq5E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20cLeZbYN = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uints3rqNW9 = BigInt("1528")
		const addressbKa9clO = accounts[3]
		const uintKmmOxLA = BigInt("1893")
		const addressNHpVmLK = accounts[4]
		const boolk9PFBEB = await GAZ_ERC20cLeZbYN.approve.call(addressbKa9clO, uints3rqNW9, {from: accounts[1]});
		const boollZhT5TW = await GAZ_ERC20cLeZbYN.approve.call(addressNHpVmLK, uintKmmOxLA, {from: accounts[0]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20WnWZwX2 = await GAZ_ERC20.new({from: accounts[5]});
		const uintnwdrVqy = BigInt("1715")
		const addresssvxWCk = accounts[1]
		const uintVp357Is = BigInt("921")
		const addressqUbEAhM = accounts[3]
		const addressvL5u85d = accounts[0]
		const uintMkrqcda = BigInt("436")
		const addressMRWQTIs = "0x0000000000000000000000000000000000000001"
		const uintE9cbavb = BigInt("204")
		const addressOGmcSo = accounts[5]
		const boolYFnp0GB = await GAZ_ERC20WnWZwX2.transfer.call(addresssvxWCk, uintnwdrVqy, {from: accounts[5]});
		const boolSEoVrom = await GAZ_ERC20WnWZwX2.transferFrom.call(addressvL5u85d, addressqUbEAhM, uintVp357Is, {from: accounts[1]});
		const boolIYBrCwD = await GAZ_ERC20WnWZwX2.approve.call(addressMRWQTIs, uintMkrqcda, {from: accounts[4]});
		const boolF8kcWlj = await GAZ_ERC20WnWZwX2.transfer.call(addressOGmcSo, uintE9cbavb, {from: accounts[3]});

		assert.equal(boolYFnp0GB, true)
		await expect(GAZ_ERC20WnWZwX2.transferFrom.call(addressvL5u85d, addressqUbEAhM, uintVp357Is, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20DqnvKhp = await GAZ_ERC20.new({from: accounts[3]});
		const addressRFtjb4D = accounts[3]
		const uintas1qL4m = BigInt("1892")
		const addressGm8wpb4 = accounts[1]
		const addressjl9xCwB = accounts[0]
		const uintPQZnLtw = BigInt("87")
		const addressuB2sjVF = accounts[4]
		const addressqD17svt = accounts[0]
		const uinteFgGCEZ = BigInt("1790")
		const addressmTyqogo = accounts[0]
		const addressQLE9vYA = accounts[0]
		const addressdg4anvY = accounts[1]
		const bools42zc3l = await GAZ_ERC20DqnvKhp.approve.call(addressRFtjb4D, {from: accounts[4]});
		const booly4iZa85 = await GAZ_ERC20DqnvKhp.transferFrom.call(addressjl9xCwB, addressGm8wpb4, uintas1qL4m, {from: "0x0000000000000000000000000000000000000001"});
		const boolpK41Jev = await GAZ_ERC20DqnvKhp.transferFrom.call(addressqD17svt, addressuB2sjVF, uintPQZnLtw, {from: accounts[3]});
		const boolwPZqeS5 = await GAZ_ERC20DqnvKhp.transferFrom.call(addressQLE9vYA, addressmTyqogo, uinteFgGCEZ, {from: accounts[5]});
		const boolS11lRBO = await GAZ_ERC20DqnvKhp.approve.call(addressdg4anvY, {from: accounts[3]});

		await expect(GAZ_ERC20DqnvKhp.approve.call(addressRFtjb4D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20F5YPPP = await GAZ_ERC20.new({from: accounts[0]});
		const uintL4lNZ9 = BigInt("1994")
		const addressmaKyrua = accounts[0]
		const uintrR4GMet = BigInt("0")
		const address5I33Uj = accounts[0]
		const addressiZVqJyn = accounts[5]
		const boolbwKykDV = await GAZ_ERC20F5YPPP.approve.call(addressmaKyrua, uintL4lNZ9, {from: accounts[1]});
		const boolRXavZYo = await GAZ_ERC20F5YPPP.transferFrom.call(addressiZVqJyn, address5I33Uj, uintrR4GMet, {from: accounts[3]});

		assert.equal(boolRXavZYo, true)
		assert.equal(boolbwKykDV, true)
	});
})