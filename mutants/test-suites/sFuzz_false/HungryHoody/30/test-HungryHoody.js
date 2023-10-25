const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyytZHGEu = await HungryHoody.new({from: accounts[4]});
		const uintA7PJuiO = BigInt("504")
		const uintbH7SByV = BigInt("1125")
		const uintS1oDnA = await HungryHoodyytZHGEu.safeMul.call(uintbH7SByV, uintA7PJuiO, {from: accounts[4]});
		const uintpIht1Bo = await HungryHoodyytZHGEu.totalSupply.call({from: accounts[0]});

		assert.equal(uintS1oDnA, BigInt("567000"))
		assert.equal(uintpIht1Bo, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyawreH7L = await HungryHoody.new({from: accounts[1]});
		const uintnPtI4MX = BigInt("1478")
		const addressA3eGeFT = accounts[2]
		const uintavSEZY = BigInt("81")
		const addressBm3fd09 = accounts[0]
		const addressCgQEW6T = accounts[1]
		const uintByJmqz = BigInt("434")
		const addressCPsb3C = accounts[3]
//		const boolKIygOfW = await HungryHoodyawreH7L.transfer.call(addressA3eGeFT, uintnPtI4MX, {from: accounts[5]});
//		const boolxGdGQlJ = await HungryHoodyawreH7L.transfer.call(addressBm3fd09, uintavSEZY, {from: "0x0000000000000000000000000000000000000001"});
//		const uint6NSqkB = await HungryHoodyawreH7L.balanceOf.call(addressCgQEW6T, {from: accounts[0]});
//		const uintMwQZfvL = await HungryHoodyawreH7L.totalSupply.call({from: accounts[2]});
//		const boolSgJmDWx = await HungryHoodyawreH7L.approve.call(addressCPsb3C, uintByJmqz, {from: accounts[4]});

		await expect(HungryHoodyawreH7L.transfer.call(addressA3eGeFT, uintnPtI4MX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyuH2Yio = await HungryHoody.new({from: accounts[0]});
		const addressvKv9MEk = accounts[4]
		const uintimAmHSt = BigInt("71")
		const uintlkrBxXu = BigInt("296")
		const uintgMaTXAd = BigInt("752")
		const uintPDBrjJ4 = BigInt("326")
		const uintfX5Eji8 = BigInt("718")
		const addressq9nakT = accounts[2]
		const uintpKHWxaf = await HungryHoodyuH2Yio.balanceOf.call(addressvKv9MEk, {from: accounts[4]});
		const uintcSj8WKg = await HungryHoodyuH2Yio.safeSub.call(uintlkrBxXu, uintimAmHSt, {from: accounts[2]});
		const uintuqNtNG5 = await HungryHoodyuH2Yio.safeMul.call(uintPDBrjJ4, uintgMaTXAd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolT9x9DxV = await HungryHoodyuH2Yio.transfer.call(addressq9nakT, uintfX5Eji8, {from: accounts[5]});
//		const uintq6WVjNI = await HungryHoodyuH2Yio.totalSupply.call({from: accounts[3]});

		assert.equal(uintcSj8WKg, BigInt("225"))
		assert.equal(uintpKHWxaf, BigInt("0"))
		assert.equal(uintuqNtNG5, BigInt("245152"))
		await expect(HungryHoodyuH2Yio.transfer.call(addressq9nakT, uintfX5Eji8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyCufJbrJ = await HungryHoody.new({from: accounts[5]});
		const uintO0WzL4 = BigInt("1535")
		const uintpJCqyss = BigInt("166")
		const addressauCHrsb = accounts[5]
		const addresswvMljYL = "0x0000000000000000000000000000000000000001"
		const uintRzbkf4q = BigInt("1046")
		const uinttZbcg8u = BigInt("1463")
		const uintlypJs3Y = BigInt("403")
		const uintCiwHxrG = BigInt("986")
		const uinteyyCCD = await HungryHoodyCufJbrJ.safeDiv.call(uintpJCqyss, uintO0WzL4, {from: "0x0000000000000000000000000000000000000001"});
		const uintzXjL9W2 = await HungryHoodyCufJbrJ.allowance.call(addresswvMljYL, addressauCHrsb, {from: accounts[3]});
		const uintXr3g3n = await HungryHoodyCufJbrJ.safeSub.call(uinttZbcg8u, uintRzbkf4q, {from: accounts[3]});
		const uintwci2HE = await HungryHoodyCufJbrJ.safeDiv.call(uintCiwHxrG, uintlypJs3Y, {from: accounts[1]});

		assert.equal(uintXr3g3n, BigInt("417"))
		assert.equal(uinteyyCCD, BigInt("0"))
		assert.equal(uintwci2HE, BigInt("2"))
		assert.equal(uintzXjL9W2, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyv0vnO6E = await HungryHoody.new({from: accounts[5]});
		const addressTMGNy1r = accounts[1]
		const uintrWU6nJ2 = BigInt("163")
		const addressWCRxl8K = accounts[2]
		const uintxKo2QvA = BigInt("1451")
		const addressqlqmJLj = accounts[2]
		const addresskR7gOyw = accounts[3]
		const addressvkYfbV = accounts[4]
		const uintOsRtp8d = await HungryHoodyv0vnO6E.balanceOf.call(addressTMGNy1r, {from: accounts[3]});
		const boolULntilH = await HungryHoodyv0vnO6E.approve.call(addressWCRxl8K, uintrWU6nJ2, {from: accounts[4]});
//		const boolkry7Wnc = await HungryHoodyv0vnO6E.transferFrom.call(addresskR7gOyw, addressqlqmJLj, uintxKo2QvA, {from: accounts[4]});
//		const uintKwDbPU3 = await HungryHoodyv0vnO6E.balanceOf.call(addressvkYfbV, {from: accounts[0]});

		assert.equal(boolULntilH, true)
		assert.equal(uintOsRtp8d, BigInt("0"))
		await expect(HungryHoodyv0vnO6E.transferFrom.call(addresskR7gOyw, addressqlqmJLj, uintxKo2QvA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyfTGiOMK = await HungryHoody.new({from: accounts[4]});
		const uintRpG6CEl = BigInt("2008")
		const uintAGqHfCv = BigInt("1202")
		const uintkps6GKT = BigInt("384")
		const uintog6k7j = BigInt("1525")
		const uintQWTFGAX = BigInt("1140")
		const uintspKP0oX = BigInt("334")
		const uintwh2y944 = BigInt("35")
		const addressQWfQ7qF = accounts[1]
		const uintxGprvJN = BigInt("1405")
		const uintLQ3hFcd = BigInt("1032")
		const uint8cXKrE = await HungryHoodyfTGiOMK.safeAdd.call(uintAGqHfCv, uintRpG6CEl, {from: accounts[4]});
		const uintGws96F = await HungryHoodyfTGiOMK.safeMul.call(uintog6k7j, uintkps6GKT, {from: accounts[3]});
		const uintBzrBbEp = await HungryHoodyfTGiOMK.safeMul.call(uintspKP0oX, uintQWTFGAX, {from: accounts[3]});
//		const boolOSQXDij = await HungryHoodyfTGiOMK.transfer.call(addressQWfQ7qF, uintwh2y944, {from: accounts[3]});
//		const uintBx6rJ0 = await HungryHoodyfTGiOMK.safeDiv.call(uintLQ3hFcd, uintxGprvJN, {from: accounts[2]});

		assert.equal(uint8cXKrE, BigInt("3210"))
		assert.equal(uintBzrBbEp, BigInt("380760"))
		assert.equal(uintGws96F, BigInt("585600"))
		await expect(HungryHoodyfTGiOMK.transfer.call(addressQWfQ7qF, uintwh2y944, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodynZoVpKa = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwKk7HIf = BigInt("225")
		const uintknv9tL2 = BigInt("694")
		const uintOlw05wg = BigInt("1103")
		const addresslKlsaE = accounts[1]
		const uintK2GGEad = BigInt("572")
		const uintgzNas0 = BigInt("261")
		const uintSf1dwZ9 = await HungryHoodynZoVpKa.safeSub.call(uintknv9tL2, uintwKk7HIf, {from: "0x0000000000000000000000000000000000000001"});
		const boolPiInLKu = await HungryHoodynZoVpKa.transfer.call(addresslKlsaE, uintOlw05wg, {from: "0x0000000000000000000000000000000000000001"});
		const uintehOKmUn = await HungryHoodynZoVpKa.safeDiv.call(uintgzNas0, uintK2GGEad, {from: accounts[0]});
	});
})