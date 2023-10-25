const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOYt5oNDX = await FrogDAO.new({from: accounts[2]});
		const uintXrPFRpL = BigInt("160")
		const addresskOWMlbS = accounts[0]
		const uintTI8m5hl = BigInt("1344")
		const uintf8DhqtV = BigInt("39")
		const uintFAvkKJ6 = BigInt("854")
		const uintqaZ46bS = BigInt("369")
		const uintgMXX2T6 = BigInt("1032")
		const uintPylSv3Y = BigInt("32")
		const addressE645LRs = accounts[1]
		const boolP8klFPq = await FrogDAOYt5oNDX.transfer.call(addresskOWMlbS, uintXrPFRpL, {from: accounts[2]});
		const uintMhRVxEK = await FrogDAOYt5oNDX.safeDiv.call(uintf8DhqtV, uintTI8m5hl, {from: accounts[4]});
//		const uintZQlZ731 = await FrogDAOYt5oNDX.safeSub.call(uintqaZ46bS, uintFAvkKJ6, {from: accounts[2]});
//		const uintRr5Hub = await FrogDAOYt5oNDX.safeMul.call(uintPylSv3Y, uintgMXX2T6, {from: accounts[0]});
//		const uintXrA9Ios = await FrogDAOYt5oNDX.balanceOf.call(addressE645LRs, {from: accounts[2]});

		assert.equal(boolP8klFPq, true)
		assert.equal(uintMhRVxEK, BigInt("0"))
		await expect(FrogDAOYt5oNDX.safeSub.call(uintqaZ46bS, uintFAvkKJ6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOawIPM6D = await FrogDAO.new({from: accounts[0]});
		const addresscmg7iV7 = accounts[1]
		const uintgEwLkQI = BigInt("1501")
		const uintwQyVTc = BigInt("2044")
		const uintf6AcLw = await FrogDAOawIPM6D.balanceOf.call(addresscmg7iV7, {from: accounts[5]});
		const uintrUzhLVb = await FrogDAOawIPM6D.safeSub.call(uintwQyVTc, uintgEwLkQI, {from: accounts[1]});
		const uintNU3xPKn = await FrogDAOawIPM6D.totalSupply.call({from: accounts[3]});

		assert.equal(uintNU3xPKn, BigInt("1000000000000000000000000"))
		assert.equal(uintf6AcLw, BigInt("0"))
		assert.equal(uintrUzhLVb, BigInt("543"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAONfkJCVp = await FrogDAO.new({from: accounts[3]});
		const uintDQFaww0 = BigInt("1258")
		const uintsTQSqeu = BigInt("125")
		const addressNSXr3ha = accounts[1]
		const addressWY93Fk = accounts[5]
		const uintcCrfcw5 = BigInt("1479")
		const uintUEmPAFV = BigInt("1239")
		const uintO2dSpwy = await FrogDAONfkJCVp.safeDiv.call(uintsTQSqeu, uintDQFaww0, {from: accounts[2]});
		const uintHdU0pPN = await FrogDAONfkJCVp.allowance.call(addressWY93Fk, addressNSXr3ha, {from: accounts[3]});
//		const uintgcVI4a6 = await FrogDAONfkJCVp.safeSub.call(uintUEmPAFV, uintcCrfcw5, {from: accounts[1]});

		assert.equal(uintHdU0pPN, BigInt("0"))
		assert.equal(uintO2dSpwy, BigInt("0"))
		await expect(FrogDAONfkJCVp.safeSub.call(uintUEmPAFV, uintcCrfcw5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOOnFDhra = await FrogDAO.new({from: accounts[1]});
		const addressvbYNY3Z = accounts[2]
		const uint9HfDo1 = BigInt("906")
		const addressZQzhT5G = accounts[4]
		const addressN3fWBAw = accounts[4]
		const uintXlvHRYE = BigInt("63")
		const address7uHM5o = accounts[2]
		const uintOG6kGFr = await FrogDAOOnFDhra.balanceOf.call(addressvbYNY3Z, {from: accounts[4]});
		const boolOYhsH0 = await FrogDAOOnFDhra.approve.call(addressZQzhT5G, uint9HfDo1, {from: accounts[1]});
		const uintDMOuXjS = await FrogDAOOnFDhra.balanceOf.call(addressN3fWBAw, {from: accounts[4]});
		const boolKIFDPzD = await FrogDAOOnFDhra.approve.call(address7uHM5o, uintXlvHRYE, {from: accounts[4]});

		assert.equal(boolKIFDPzD, true)
		assert.equal(boolOYhsH0, true)
		assert.equal(uintDMOuXjS, BigInt("0"))
		assert.equal(uintOG6kGFr, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOfNh8Uuo = await FrogDAO.new({from: accounts[1]});
		const uint1TfCcp = BigInt("1013")
		const addressyyFm9Gq = accounts[3]
		const uintwBB7ACE = BigInt("909")
		const uintOVPES6f = BigInt("1672")
		const uintI6ENDH4 = BigInt("1969")
		const addressHoerSSH = accounts[4]
		const addressosGySOy = accounts[0]
		const boolLtSGojB = await FrogDAOfNh8Uuo.approve.call(addressyyFm9Gq, uint1TfCcp, {from: accounts[2]});
		const uintOngYflx = await FrogDAOfNh8Uuo.safeAdd.call(uintOVPES6f, uintwBB7ACE, {from: "0x0000000000000000000000000000000000000001"});
//		const booltspQTx3 = await FrogDAOfNh8Uuo.transferFrom.call(addressosGySOy, addressHoerSSH, uintI6ENDH4, {from: accounts[0]});

		assert.equal(boolLtSGojB, true)
		assert.equal(uintOngYflx, BigInt("2581"))
		await expect(FrogDAOfNh8Uuo.transferFrom.call(addressosGySOy, addressHoerSSH, uintI6ENDH4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOrLwaAql = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const addressuNYYkh = accounts[4]
		const addressDWsRuvc = accounts[0]
		const uintvnteNo = BigInt("761")
		const addressaMSOc8L = accounts[3]
		const addressrLUPt9W = accounts[0]
		const uintZx3GIRN = BigInt("1169")
		const uinthKhJMG5 = BigInt("1818")
		const uinto8Waudg = BigInt("2002")
		const uintsXc1f8B = BigInt("319")
		const uinthRr9gJ = await FrogDAOrLwaAql.allowance.call(addressDWsRuvc, addressuNYYkh, {from: accounts[5]});
		const boolQkCI9kH = await FrogDAOrLwaAql.transferFrom.call(addressrLUPt9W, addressaMSOc8L, uintvnteNo, {from: accounts[3]});
		const uintXcnFf1w = await FrogDAOrLwaAql.totalSupply.call({from: accounts[5]});
		const uintVjIQk8m = await FrogDAOrLwaAql.safeAdd.call(uinthKhJMG5, uintZx3GIRN, {from: "0x0000000000000000000000000000000000000001"});
		const uintPitIoa = await FrogDAOrLwaAql.totalSupply.call({from: accounts[0]});
		const uintbJTeXD4 = await FrogDAOrLwaAql.safeMul.call(uintsXc1f8B, uinto8Waudg, {from: accounts[4]});
	});
})