const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOZiMPJai = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSu1YNTE = BigInt("1136")
		const uintfILa54D = BigInt("25")
		const uintXce9mc = await FrogDAOZiMPJai.safeSub.call(uintfILa54D, uintSu1YNTE, {from: accounts[1]});
		const uintfdHGiQ = await FrogDAOZiMPJai.totalSupply.call({from: accounts[3]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOwzJzzG = await FrogDAO.new({from: accounts[1]});
		const uintu0plaTA = BigInt("1937")
		const addressgKI0juS = accounts[2]
		const addressB8Mc9qa = accounts[4]
		const addressFUlhZvK = accounts[4]
		const uintVNqF9lP = BigInt("1102")
		const addresslGu2oOL = accounts[3]
		const addresshNAg2cO = accounts[3]
		const boolP4hCFcT = await FrogDAOwzJzzG.approve.call(addressgKI0juS, uintu0plaTA, {from: accounts[2]});
		const uintHxWYt97 = await FrogDAOwzJzzG.totalSupply.call({from: accounts[5]});
		const uintUKIqUul = await FrogDAOwzJzzG.allowance.call(addressFUlhZvK, addressB8Mc9qa, {from: accounts[1]});
		const boolN8NC0KQ = await FrogDAOwzJzzG.approve.call(addresslGu2oOL, uintVNqF9lP, {from: accounts[5]});
		const uintimh8voq = await FrogDAOwzJzzG.balanceOf.call(addresshNAg2cO, {from: accounts[1]});

		assert.equal(boolN8NC0KQ, true)
		assert.equal(boolP4hCFcT, true)
		assert.equal(uintHxWYt97, BigInt("1000000000000000000000000"))
		assert.equal(uintUKIqUul, BigInt("0"))
		assert.equal(uintimh8voq, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOOWmnfl8 = await FrogDAO.new({from: accounts[4]});
		const uint2nBKU5 = BigInt("1608")
		const addressR8l4m3 = accounts[3]
		const uintX6j8GhT = BigInt("1493")
		const addressnS49q1F = accounts[4]
		const uintmnEDCGt = await FrogDAOOWmnfl8.totalSupply.call({from: accounts[2]});
		const boolVEvV4OV = await FrogDAOOWmnfl8.approve.call(addressR8l4m3, uint2nBKU5, {from: accounts[3]});
		const boolTHoCkO0 = await FrogDAOOWmnfl8.transfer.call(addressnS49q1F, uintX6j8GhT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVEvV4OV, true)
		assert.equal(uintmnEDCGt, BigInt("1000000000000000000000000"))
		await expect(FrogDAOOWmnfl8.transfer.call(addressnS49q1F, uintX6j8GhT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOsOmFRtm = await FrogDAO.new({from: accounts[1]});
		const addresszrxt9t8 = accounts[5]
		const addressuIzPBHl = accounts[0]
		const uintct8z9ee = BigInt("4")
		const uintoDpOJA = BigInt("1356")
		const uintINWphCu = BigInt("824")
		const addresscbeAYxt = accounts[1]
		const addressAk9SFjq = "0x0000000000000000000000000000000000000001"
		const addressOW1CxS1 = accounts[4]
		const uints2pS44 = BigInt("528")
		const uintEMrSlD0 = BigInt("905")
		const uintnFzTMz = await FrogDAOsOmFRtm.allowance.call(addressuIzPBHl, addresszrxt9t8, {from: accounts[1]});
		const uintG6GzFdY = await FrogDAOsOmFRtm.safeDiv.call(uintoDpOJA, uintct8z9ee, {from: accounts[4]});
		const booleHDhzwO = await FrogDAOsOmFRtm.transfer.call(addresscbeAYxt, uintINWphCu, {from: accounts[1]});
		const uintyUUb9Z = await FrogDAOsOmFRtm.allowance.call(addressOW1CxS1, addressAk9SFjq, {from: accounts[3]});
		const uintR0O6xYO = await FrogDAOsOmFRtm.safeAdd.call(uintEMrSlD0, uints2pS44, {from: accounts[0]});

		assert.equal(booleHDhzwO, true)
		assert.equal(uintG6GzFdY, BigInt("339"))
		assert.equal(uintR0O6xYO, BigInt("1433"))
		assert.equal(uintnFzTMz, BigInt("0"))
		assert.equal(uintyUUb9Z, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOKkD7Sq3 = await FrogDAO.new({from: accounts[3]});
		const uintKwMxKj0 = BigInt("1073")
		const addressiBwsvdK = accounts[0]
		const addressjW5JREH = accounts[0]
		const uintCk81EpH = BigInt("420")
		const uintwb4h6u3 = BigInt("1706")
		const uintHgfMcz2 = BigInt("1888")
		const uintCojH4jx = BigInt("783")
		const boolmYKG5k = await FrogDAOKkD7Sq3.transferFrom.call(addressjW5JREH, addressiBwsvdK, uintKwMxKj0, {from: accounts[1]});
		const uintIlB6ZrF = await FrogDAOKkD7Sq3.safeMul.call(uintwb4h6u3, uintCk81EpH, {from: accounts[3]});
		const uintlof9RGF = await FrogDAOKkD7Sq3.totalSupply.call({from: accounts[2]});
		const uintqN4E8Do = await FrogDAOKkD7Sq3.safeDiv.call(uintCojH4jx, uintHgfMcz2, {from: "0x0000000000000000000000000000000000000001"});
		const uintBQLNtoO = await FrogDAOKkD7Sq3.totalSupply.call({from: accounts[3]});

		await expect(FrogDAOKkD7Sq3.transferFrom.call(addressjW5JREH, addressiBwsvdK, uintKwMxKj0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})