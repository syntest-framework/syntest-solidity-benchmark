const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOPK8Aija = await FrogDAO.new({from: accounts[2]});
		const addressiM4acJZ = accounts[4]
		const uintJRP44xL = BigInt("1151")
		const uintjB7XEkz = BigInt("260")
		const addressZOo3d3K = accounts[0]
		const addressvYMpXJn = "0x0000000000000000000000000000000000000001"
		const uintgHNEbia = BigInt("1575")
		const addresssvQZjiy = accounts[2]
		const addresspQ4RGKg = accounts[4]
		const addresseyyVJr5 = accounts[4]
		const uintGUW7Zf3 = await FrogDAOPK8Aija.totalSupply.call({from: accounts[1]});
		const uintmkW8Vcg = await FrogDAOPK8Aija.balanceOf.call(addressiM4acJZ, {from: accounts[3]});
		const uintB2YT6g2 = await FrogDAOPK8Aija.safeDiv.call(uintjB7XEkz, uintJRP44xL, {from: accounts[4]});
		const uintDpOUgLO = await FrogDAOPK8Aija.allowance.call(addressvYMpXJn, addressZOo3d3K, {from: "0x0000000000000000000000000000000000000001"});
		const boolyw1M7De = await FrogDAOPK8Aija.approve.call(addresssvQZjiy, uintgHNEbia, {from: accounts[2]});
		const uintP684Grr = await FrogDAOPK8Aija.allowance.call(addresseyyVJr5, addresspQ4RGKg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolyw1M7De, true)
		assert.equal(uintB2YT6g2, BigInt("0"))
		assert.equal(uintDpOUgLO, BigInt("0"))
		assert.equal(uintGUW7Zf3, BigInt("1000000000000000000000000"))
		assert.equal(uintP684Grr, BigInt("0"))
		assert.equal(uintmkW8Vcg, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOlI0DUuI = await FrogDAO.new({from: accounts[5]});
		const uintiqOiZrq = BigInt("355")
		const uintmSgW0F2 = BigInt("338")
		const addressQG9hGZ5 = "0x0000000000000000000000000000000000000001"
		const addressqj1fHH5 = accounts[5]
		const uintQGzZetS = BigInt("713")
		const uintnkHvid = BigInt("230")
		const uintmS1ugKk = BigInt("1885")
		const uintXWyfrtn = BigInt("720")
		const uintzaRkib = BigInt("131")
		const uintAb1dVEC = BigInt("316")
		const uintTHE4jAT = await FrogDAOlI0DUuI.safeMul.call(uintmSgW0F2, uintiqOiZrq, {from: accounts[4]});
		const uintDHLkqb6 = await FrogDAOlI0DUuI.allowance.call(addressqj1fHH5, addressQG9hGZ5, {from: accounts[3]});
		const uintzlTKxCu = await FrogDAOlI0DUuI.safeDiv.call(uintnkHvid, uintQGzZetS, {from: accounts[1]});
		const uintZ2xhCpy = await FrogDAOlI0DUuI.totalSupply.call({from: accounts[4]});
//		const uintQAIBFya = await FrogDAOlI0DUuI.safeSub.call(uintXWyfrtn, uintmS1ugKk, {from: accounts[0]});
//		const uintUeg8zE = await FrogDAOlI0DUuI.safeDiv.call(uintAb1dVEC, uintzaRkib, {from: accounts[3]});

		assert.equal(uintDHLkqb6, BigInt("0"))
		assert.equal(uintTHE4jAT, BigInt("119990"))
		assert.equal(uintZ2xhCpy, BigInt("1000000000000000000000000"))
		assert.equal(uintzlTKxCu, BigInt("0"))
		await expect(FrogDAOlI0DUuI.safeSub.call(uintXWyfrtn, uintmS1ugKk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOGRP9nu = await FrogDAO.new({from: accounts[4]});
		const uintvakRNGV = BigInt("1030")
		const addressXxU7h8F = accounts[4]
		const uintBnIK9Yf = BigInt("1380")
		const addressgsrYJFM = accounts[2]
		const addressIGua27h = accounts[2]
		const uintscN1NaT = BigInt("1822")
		const addressyzklzui = accounts[1]
		const addresso34T3QN = accounts[1]
		const uintNM6f0N9 = BigInt("583")
		const uintcDWtgy = BigInt("318")
		const uintjxCu6gL = BigInt("1745")
		const uintj6wmdC = BigInt("175")
		const uinto7bSNxY = BigInt("1514")
		const uinteQtaGn = BigInt("750")
		const boolTRZaUt1 = await FrogDAOGRP9nu.approve.call(addressXxU7h8F, uintvakRNGV, {from: accounts[0]});
//		const bool6rBaM2 = await FrogDAOGRP9nu.transferFrom.call(addressIGua27h, addressgsrYJFM, uintBnIK9Yf, {from: accounts[1]});
//		const boolkSbA5s9 = await FrogDAOGRP9nu.transferFrom.call(addresso34T3QN, addressyzklzui, uintscN1NaT, {from: accounts[1]});
//		const uintut2sM5S = await FrogDAOGRP9nu.safeSub.call(uintcDWtgy, uintNM6f0N9, {from: accounts[4]});
//		const uintKs2JjZA = await FrogDAOGRP9nu.safeMul.call(uintj6wmdC, uintjxCu6gL, {from: accounts[3]});
//		const uintuBVK53Y = await FrogDAOGRP9nu.safeDiv.call(uinteQtaGn, uinto7bSNxY, {from: accounts[3]});

		assert.equal(boolTRZaUt1, true)
		await expect(FrogDAOGRP9nu.transferFrom.call(addressIGua27h, addressgsrYJFM, uintBnIK9Yf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOFWuQDCH = await FrogDAO.new({from: accounts[4]});
		const uintzAR3TQ4 = BigInt("1497")
		const addressNCIRYUY = accounts[2]
		const uintWhxgj7H = BigInt("1801")
		const uintQTRqLDw = BigInt("234")
		const uintbaTcujf = BigInt("419")
		const addressBJCVZS = accounts[5]
		const addresszeQZABu = accounts[3]
		const addressmCyxDal = accounts[0]
		const addressN8xSwwL = accounts[2]
		const uintIEGulE = BigInt("1116")
		const addressbDQFER = accounts[3]
//		const boolpaTZVos = await FrogDAOFWuQDCH.transfer.call(addressNCIRYUY, uintzAR3TQ4, {from: accounts[2]});
//		const uintqlMiN5O = await FrogDAOFWuQDCH.safeMul.call(uintQTRqLDw, uintWhxgj7H, {from: accounts[0]});
//		const boolvJF6cbO = await FrogDAOFWuQDCH.approve.call(addressBJCVZS, uintbaTcujf, {from: accounts[5]});
//		const uinttIPDHu = await FrogDAOFWuQDCH.allowance.call(addressmCyxDal, addresszeQZABu, {from: accounts[0]});
//		const uintie57bLy = await FrogDAOFWuQDCH.balanceOf.call(addressN8xSwwL, {from: accounts[1]});
//		const boolnUGYJB = await FrogDAOFWuQDCH.approve.call(addressbDQFER, uintIEGulE, {from: accounts[2]});

		await expect(FrogDAOFWuQDCH.transfer.call(addressNCIRYUY, uintzAR3TQ4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOxAU0dsO = await FrogDAO.new({from: accounts[0]});
		const uintA84nIHs = BigInt("484")
		const uintDnpBXT = BigInt("249")
		const uintpRY8CpM = BigInt("1085")
		const uintYL8EE6L = BigInt("534")
		const addresspTemMhl = "0x0000000000000000000000000000000000000001"
		const addressASNZlaM = accounts[1]
		const uintVCucDK6 = BigInt("691")
		const addresscOmPwfN = accounts[4]
		const addressU6ssTfz = accounts[4]
		const addressZLaOMQ2 = accounts[2]
		const uintN1M5ODz = await FrogDAOxAU0dsO.safeAdd.call(uintDnpBXT, uintA84nIHs, {from: accounts[1]});
		const uintykwP1Z = await FrogDAOxAU0dsO.safeDiv.call(uintYL8EE6L, uintpRY8CpM, {from: accounts[0]});
		const uint0XXx0c = await FrogDAOxAU0dsO.allowance.call(addressASNZlaM, addresspTemMhl, {from: accounts[1]});
		const boolVmqd0M2 = await FrogDAOxAU0dsO.approve.call(addresscOmPwfN, uintVCucDK6, {from: accounts[1]});
		const uint7ysWxz = await FrogDAOxAU0dsO.allowance.call(addressZLaOMQ2, addressU6ssTfz, {from: accounts[0]});

		assert.equal(boolVmqd0M2, true)
		assert.equal(uint0XXx0c, BigInt("0"))
		assert.equal(uint7ysWxz, BigInt("0"))
		assert.equal(uintN1M5ODz, BigInt("733"))
		assert.equal(uintykwP1Z, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOwRABiY = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintOUgeu7N = BigInt("72")
		const uintZKDhzvp = BigInt("969")
		const uintZ28VJpm = BigInt("1516")
		const uintqNlEA9j = BigInt("636")
		const uintaKvgxn7 = BigInt("534")
		const addressZ2qa6RF = accounts[4]
		const addressZrROb5V = accounts[4]
		const addressCJcLWSc = accounts[0]
		const uintp8cpxyX = BigInt("1488")
		const uintEWc7YcB = BigInt("908")
		const uintUkxi1hX = await FrogDAOwRABiY.safeDiv.call(uintZKDhzvp, uintOUgeu7N, {from: accounts[0]});
		const uintfPY4mmm = await FrogDAOwRABiY.safeMul.call(uintqNlEA9j, uintZ28VJpm, {from: accounts[2]});
		const boolkVFyzcy = await FrogDAOwRABiY.approve.call(addressZ2qa6RF, uintaKvgxn7, {from: "0x0000000000000000000000000000000000000001"});
		const uintnQWdy0K = await FrogDAOwRABiY.allowance.call(addressCJcLWSc, addressZrROb5V, {from: accounts[5]});
		const uintTJX2P01 = await FrogDAOwRABiY.safeSub.call(uintEWc7YcB, uintp8cpxyX, {from: accounts[1]});
	});
})