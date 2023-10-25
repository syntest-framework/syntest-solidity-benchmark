const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20PxDNpPI = await GAZ_ERC20.new({from: accounts[3]});
		const uintOiKId2l = BigInt("151")
		const addressANUtQXG = accounts[5]
		const uinteDH5xn = BigInt("1961")
		const addresskOuynBq = "0x0000000000000000000000000000000000000001"
		const uintShrNgta = BigInt("482")
		const addressSZeMtXE = accounts[0]
//		const boolMW5Bbi = await GAZ_ERC20PxDNpPI.transfer.call(addressANUtQXG, uintOiKId2l, {from: accounts[2]});
//		const boolYoAfR3d = await GAZ_ERC20PxDNpPI.transfer.call(addresskOuynBq, uinteDH5xn, {from: accounts[3]});
//		const boollXbr2fh = await GAZ_ERC20PxDNpPI.approve.call(addressSZeMtXE, uintShrNgta, {from: accounts[2]});

		await expect(GAZ_ERC20PxDNpPI.transfer.call(addressANUtQXG, uintOiKId2l, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20RmaL6kQ = await GAZ_ERC20.new({from: accounts[0]});
		const uintbSNnh3o = BigInt("1629")
		const addressIXqgOMZ = accounts[4]
		const uinthPK1TQ3 = BigInt("1393")
		const addressp8Dmwja = accounts[2]
		const uintqFyAQBz = BigInt("703")
		const addressfs78gPT = accounts[3]
		const boolPiQxLBE = await GAZ_ERC20RmaL6kQ.transfer.call(addressIXqgOMZ, uintbSNnh3o, {from: accounts[0]});
//		const boolFwZUo7i = await GAZ_ERC20RmaL6kQ.transfer.call(addressp8Dmwja, uinthPK1TQ3, {from: accounts[2]});
//		const boolAyujMOh = await GAZ_ERC20RmaL6kQ.transfer.call(addressfs78gPT, uintqFyAQBz, {from: accounts[2]});

		assert.equal(boolPiQxLBE, true)
		await expect(GAZ_ERC20RmaL6kQ.transfer.call(addressp8Dmwja, uinthPK1TQ3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20EEB6MY = await GAZ_ERC20.new({from: accounts[1]});
		const uinthFojpOT = BigInt("1881")
		const addressgx7KQF = accounts[1]
		const uinti5h5gDd = BigInt("2023")
		const addresshxnQTFV = accounts[2]
		const uintN3bdFOr = BigInt("840")
		const addressoQG80bb = accounts[0]
		const uintHKs6DuL = BigInt("1395")
		const addressKPEOR2S = "0x0000000000000000000000000000000000000001"
		const uintXzXJl5w = BigInt("1594")
		const addressu8GQbYa = accounts[4]
		const boolVaB1wF = await GAZ_ERC20EEB6MY.transfer.call(addressgx7KQF, uinthFojpOT, {from: accounts[1]});
		const boolEecZqru = await GAZ_ERC20EEB6MY.transfer.call(addresshxnQTFV, uinti5h5gDd, {from: accounts[1]});
		const boolfKjtmP = await GAZ_ERC20EEB6MY.approve.call(addressoQG80bb, uintN3bdFOr, {from: accounts[4]});
		const boolMNHUct = await GAZ_ERC20EEB6MY.transfer.call(addressKPEOR2S, uintHKs6DuL, {from: accounts[1]});
//		const boolrAWEVH4 = await GAZ_ERC20EEB6MY.transfer.call(addressu8GQbYa, uintXzXJl5w, {from: accounts[0]});

		assert.equal(boolEecZqru, true)
		assert.equal(boolMNHUct, true)
		assert.equal(boolVaB1wF, true)
		assert.equal(boolfKjtmP, true)
		await expect(GAZ_ERC20EEB6MY.transfer.call(addressu8GQbYa, uintXzXJl5w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20cOLarb = await GAZ_ERC20.new({from: accounts[1]});
		const uintcZNGqb = BigInt("1819")
		const addressU9yKGet = accounts[0]
		const addressLjkz1W5 = accounts[1]
		const uintpzoQe7O = BigInt("1614")
		const addresse63XHSV = accounts[1]
		const uintfleVrdU = BigInt("1959")
		const addressqT0Yy8l = accounts[4]
//		const boolZcZ3Pu8 = await GAZ_ERC20cOLarb.transferFrom.call(addressLjkz1W5, addressU9yKGet, uintcZNGqb, {from: accounts[3]});
//		const boolojzaEjj = await GAZ_ERC20cOLarb.approve.call(addresse63XHSV, uintpzoQe7O, {from: accounts[0]});
//		const boolcZCSemj = await GAZ_ERC20cOLarb.transfer.call(addressqT0Yy8l, uintfleVrdU, {from: accounts[4]});

		await expect(GAZ_ERC20cOLarb.transferFrom.call(addressLjkz1W5, addressU9yKGet, uintcZNGqb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20uYRkYkR = await GAZ_ERC20.new({from: accounts[1]});
		const addresstg79TG = "0x0000000000000000000000000000000000000001"
		const uintSQ4QXdG = BigInt("1861")
		const addressTQ3Lbi7 = accounts[1]
		const uintD487khX = BigInt("1487")
		const addressSKC9alt = accounts[3]
//		const boolsQGKWmR = await GAZ_ERC20uYRkYkR.approve.call(addresstg79TG, {from: accounts[2]});
//		const boolcTxqzIw = await GAZ_ERC20uYRkYkR.approve.call(addressTQ3Lbi7, uintSQ4QXdG, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyuN4viM = await GAZ_ERC20uYRkYkR.approve.call(addressSKC9alt, uintD487khX, {from: accounts[0]});

		await expect(GAZ_ERC20uYRkYkR.approve.call(addresstg79TG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20eGIccAd = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcisBM4T = BigInt("291")
		const addressZQ7SCyu = accounts[1]
		const addressZ3n2FxW = accounts[1]
		const uintCByuVmF = BigInt("1927")
		const addressfEuImOD = accounts[4]
		const boolqRUXpJr = await GAZ_ERC20eGIccAd.approve.call(addressZQ7SCyu, uintcisBM4T, {from: accounts[1]});
		const boolrtBGjZb = await GAZ_ERC20eGIccAd.approve.call(addressZ3n2FxW, {from: accounts[1]});
		const boolr6itGy0 = await GAZ_ERC20eGIccAd.transfer.call(addressfEuImOD, uintCByuVmF, {from: accounts[3]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20wMN4EGs = await GAZ_ERC20.new({from: accounts[5]});
		const uintvrHXqes = BigInt("24")
		const addresssFgkAVF = "0x0000000000000000000000000000000000000001"
		const addressGPOFJ1n = accounts[3]
		const uintvVO1Ctb = BigInt("990")
		const addressJZFDBmU = accounts[1]
		const uintWJ8I1ch = BigInt("696")
		const addressSzjVy8 = "0x0000000000000000000000000000000000000001"
		const uintHt37bcX = BigInt("268")
		const addressuILVhVr = "0x0000000000000000000000000000000000000001"
		const boolFTPof1 = await GAZ_ERC20wMN4EGs.approve.call(addresssFgkAVF, uintvrHXqes, {from: "0x0000000000000000000000000000000000000001"});
//		const booldRBKls4 = await GAZ_ERC20wMN4EGs.approve.call(addressGPOFJ1n, {from: accounts[1]});
//		const boolYVlNy23 = await GAZ_ERC20wMN4EGs.transfer.call(addressJZFDBmU, uintvVO1Ctb, {from: accounts[0]});
//		const boolO2dqycB = await GAZ_ERC20wMN4EGs.approve.call(addressSzjVy8, uintWJ8I1ch, {from: accounts[2]});
//		const boolKyccevb = await GAZ_ERC20wMN4EGs.approve.call(addressuILVhVr, uintHt37bcX, {from: accounts[4]});

		assert.equal(boolFTPof1, true)
		await expect(GAZ_ERC20wMN4EGs.approve.call(addressGPOFJ1n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ZL0onsy = await GAZ_ERC20.new({from: accounts[3]});
		const addressWgZHILf = accounts[0]
		const uintOGOwBRd = BigInt("1189")
		const addressOQHPusH = accounts[1]
		const addressGXxWTM = accounts[0]
		const uintQ68bQh7 = BigInt("412")
		const addressaaQrkaW = accounts[4]
		const uintx7IzfuD = BigInt("408")
		const addressLk7dYYB = accounts[1]
		const addressk1j8O2r = accounts[3]
//		const boolaeHv1M4 = await GAZ_ERC20ZL0onsy.approve.call(addressWgZHILf, {from: accounts[4]});
//		const boolE2lusae = await GAZ_ERC20ZL0onsy.transferFrom.call(addressGXxWTM, addressOQHPusH, uintOGOwBRd, {from: accounts[4]});
//		const boolm4W5YaD = await GAZ_ERC20ZL0onsy.transfer.call(addressaaQrkaW, uintQ68bQh7, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgSsJ8YG = await GAZ_ERC20ZL0onsy.transferFrom.call(addressk1j8O2r, addressLk7dYYB, uintx7IzfuD, {from: accounts[0]});

		await expect(GAZ_ERC20ZL0onsy.approve.call(addressWgZHILf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20WlLSjdR = await GAZ_ERC20.new({from: accounts[1]});
		const addresslcZWuc = accounts[3]
		const uintPsvFvGz = BigInt("1889")
		const addressocPKuFy = accounts[4]
		const uintV4JmDQ = BigInt("1117")
		const addressd47bQj = accounts[0]
		const addressDjd8sLS = accounts[3]
//		const boolcCvm9dT = await GAZ_ERC20WlLSjdR.approve.call(addresslcZWuc, {from: accounts[3]});
//		const booln7DkeT = await GAZ_ERC20WlLSjdR.transfer.call(addressocPKuFy, uintPsvFvGz, {from: accounts[4]});
//		const boolDyHkgeN = await GAZ_ERC20WlLSjdR.transferFrom.call(addressDjd8sLS, addressd47bQj, uintV4JmDQ, {from: accounts[1]});

		await expect(GAZ_ERC20WlLSjdR.approve.call(addresslcZWuc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20lQDsfSH = await GAZ_ERC20.new({from: accounts[3]});
		const uintGD4mcDy = BigInt("1671")
		const addressl8D9RcP = accounts[1]
		const addresssqPzjSM = accounts[0]
		const uint90Huhp = BigInt("662")
		const addressebOHmsl = accounts[3]
		const uintfC8GTv1 = BigInt("1673")
		const addressArfbaVk = accounts[3]
		const uintOv1hCFa = BigInt("1807")
		const addressdquqkCt = accounts[1]
		const addressOShzMOB = accounts[0]
		const uintlFy8EhD = BigInt("1215")
		const addressZVq70pB = accounts[4]
		const uinttAJso7c = BigInt("720")
		const addressnwDLku = accounts[2]
		const booln6gr3vT = await GAZ_ERC20lQDsfSH.approve.call(addressl8D9RcP, uintGD4mcDy, {from: accounts[4]});
//		const boolR6kBWgI = await GAZ_ERC20lQDsfSH.approve.call(addresssqPzjSM, {from: accounts[0]});
//		const boolO44SWCo = await GAZ_ERC20lQDsfSH.approve.call(addressebOHmsl, uint90Huhp, {from: accounts[3]});
//		const boolaS6bNAz = await GAZ_ERC20lQDsfSH.transfer.call(addressArfbaVk, uintfC8GTv1, {from: accounts[0]});
//		const boolwy9Ss10 = await GAZ_ERC20lQDsfSH.transferFrom.call(addressOShzMOB, addressdquqkCt, uintOv1hCFa, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrwNBKQ = await GAZ_ERC20lQDsfSH.transfer.call(addressZVq70pB, uintlFy8EhD, {from: accounts[4]});
//		const boolhhidIM = await GAZ_ERC20lQDsfSH.approve.call(addressnwDLku, uinttAJso7c, {from: accounts[0]});

		assert.equal(booln6gr3vT, true)
		await expect(GAZ_ERC20lQDsfSH.approve.call(addresssqPzjSM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20KQsSSNg = await GAZ_ERC20.new({from: accounts[1]});
		const uintVyeLkNe = BigInt("681")
		const addresswLiLoUc = accounts[0]
		const addressWzccvyw = accounts[2]
		const addressz8vDe8J = accounts[0]
		const boolrdmrMXU = await GAZ_ERC20KQsSSNg.approve.call(addresswLiLoUc, uintVyeLkNe, {from: accounts[1]});
//		const boolSsOfiYp = await GAZ_ERC20KQsSSNg.approve.call(addressWzccvyw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfXpLrKl = await GAZ_ERC20KQsSSNg.approve.call(addressz8vDe8J, {from: accounts[1]});

		assert.equal(boolrdmrMXU, true)
		await expect(GAZ_ERC20KQsSSNg.approve.call(addressWzccvyw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20yW3ZSC = await GAZ_ERC20.new({from: accounts[5]});
		const uintbFgES0m = BigInt("1704")
		const addressyLF9MKj = accounts[0]
		const addresscHL2j11 = accounts[1]
		const uintNb7QqUk = BigInt("197")
		const addressCinial2 = accounts[2]
		const uintsArM7aQ = BigInt("1940")
		const addressKldeFyg = "0x0000000000000000000000000000000000000001"
		const boolI7xG9u = await GAZ_ERC20yW3ZSC.approve.call(addressyLF9MKj, uintbFgES0m, {from: accounts[3]});
//		const boolRmZsetP = await GAZ_ERC20yW3ZSC.approve.call(addresscHL2j11, {from: accounts[5]});
//		const boolwZgqEUi = await GAZ_ERC20yW3ZSC.transfer.call(addressCinial2, uintNb7QqUk, {from: accounts[1]});
//		const boolpII2GTU = await GAZ_ERC20yW3ZSC.approve.call(addressKldeFyg, uintsArM7aQ, {from: accounts[4]});

		assert.equal(boolI7xG9u, true)
		await expect(GAZ_ERC20yW3ZSC.approve.call(addresscHL2j11, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})