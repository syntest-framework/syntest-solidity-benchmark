const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADYl9n5jc = await ZAD.new({from: accounts[3]});
		const uintdiQoPFw = BigInt("1420")
		const addressMbtXKAM = accounts[1]
		const uintF9oQJP = BigInt("397")
		const addressgC6TbUD = accounts[3]
		const uintlmhwKyf = BigInt("1083")
		const addressqXcbcWs = accounts[1]
		const boolMsRFuQD = await ZADYl9n5jc.decreaseAllowance.call(addressMbtXKAM, uintdiQoPFw, {from: accounts[2]});
		const boolcdlOJoT = await ZADYl9n5jc.approve.call(addressgC6TbUD, uintF9oQJP, {from: accounts[2]});
		const boolOPDkypV = await ZADYl9n5jc.transfer.call(addressqXcbcWs, uintlmhwKyf, {from: accounts[2]});

		await expect(ZADYl9n5jc.decreaseAllowance.call(addressMbtXKAM, uintdiQoPFw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADq53Q1O = await ZAD.new({from: accounts[2]});
		const addresssBDS3gA = accounts[4]
		const uintZEZIjE1 = BigInt("1239")
		const addressJBRRm0S = accounts[4]
		const uintK2Zh3NE = BigInt("1002")
		const uintviUnGNr = BigInt("157")
		const addressDDkVc8e = accounts[0]
		const uint256cHye5rY = await ZADq53Q1O.balanceOf.call(addresssBDS3gA, {from: "0x0000000000000000000000000000000000000001"});
		const booltSYw7kX = await ZADq53Q1O.approve.call(addressJBRRm0S, uintZEZIjE1, {from: accounts[3]});
		const uint256k3fDslM = await ZADq53Q1O._burn.call(uintK2Zh3NE, {from: accounts[5]});
		const boolkO3TPET = await ZADq53Q1O.transfer.call(addressDDkVc8e, uintviUnGNr, {from: accounts[1]});

		assert.equal(booltSYw7kX, true)
		assert.equal(uint256cHye5rY, BigInt("0"))
		await expect(ZADq53Q1O._burn.call(uintK2Zh3NE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADpNJd6SJ = await ZAD.new({from: accounts[5]});
		const uintM8ssSTg = BigInt("914")
		const addressTouqNAW = accounts[3]
		const uintrgjqSa = BigInt("1819")
		const addressXU7Opvd = accounts[3]
		const boolNLf1BXg = await ZADpNJd6SJ.increaseAllowance.call(addressTouqNAW, uintM8ssSTg, {from: accounts[5]});
		const uint8CrRvfxR = await ZADpNJd6SJ.decimals.call({from: accounts[2]});
		const boolVjotzHn = await ZADpNJd6SJ.increaseAllowance.call(addressXU7Opvd, uintrgjqSa, {from: accounts[3]});

		assert.equal(boolNLf1BXg, true)
		assert.equal(boolVjotzHn, true)
		assert.equal(uint8CrRvfxR, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADzWPeP85 = await ZAD.new({from: accounts[1]});
		const uintsJ1w0MI = BigInt("790")
		const addressYAiTmUx = accounts[5]
		const uintURz8LM = BigInt("1216")
		const addressLtvrtEi = accounts[2]
		const addressiz3p0qx = accounts[3]
		const addressQnGa886 = accounts[4]
		const uintQiRTUDM = BigInt("105")
		const boolsWolFRG = await ZADzWPeP85.increaseAllowance.call(addressYAiTmUx, uintsJ1w0MI, {from: accounts[2]});
		const boolJIIJBVq = await ZADzWPeP85.transfer.call(addressLtvrtEi, uintURz8LM, {from: accounts[4]});
		const uint256mxDvH0S = await ZADzWPeP85.allowance.call(addressQnGa886, addressiz3p0qx, {from: accounts[5]});
		const uint256dOcC76E = await ZADzWPeP85._burn.call(uintQiRTUDM, {from: accounts[4]});

		assert.equal(boolsWolFRG, true)
		await expect(ZADzWPeP85.transfer.call(addressLtvrtEi, uintURz8LM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADlqZ7yOn = await ZAD.new({from: accounts[3]});
		const uintTdrRasN = BigInt("1698")
		const addressaMmi1pN = "0x0000000000000000000000000000000000000001"
		const uint8SnCwqNV = await ZADlqZ7yOn.decimals.call({from: accounts[4]});
		const uint256HaR3jWa = await ZADlqZ7yOn.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const booldU4tCs7 = await ZADlqZ7yOn.approve.call(addressaMmi1pN, uintTdrRasN, {from: accounts[4]});

		assert.equal(booldU4tCs7, true)
		assert.equal(uint256HaR3jWa, BigInt("100000000000000000000000000"))
		assert.equal(uint8SnCwqNV, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADMnM8XDo = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkNEKlp = BigInt("1796")
		const addressdY3L5fq = accounts[0]
		const uint8DjakvzJ = await ZADMnM8XDo.decimals.call({from: accounts[1]});
		const boolxzmCvoz = await ZADMnM8XDo.transfer.call(addressdY3L5fq, uintkNEKlp, {from: accounts[1]});
	});

	it('test for ZAD', async () => {
		const ZADa44iLG = await ZAD.new({from: accounts[4]});
		const addressF2GXw6b = accounts[3]
		const addresstg619Qq = accounts[1]
		const addressU5o92Dm = accounts[3]
		const addressxd2lVQd = accounts[5]
		const uintroaQfGw = BigInt("1090")
		const address1EWO41 = "0x0000000000000000000000000000000000000001"
		const stringBwY51lb = await ZADa44iLG.symbol.call({from: accounts[3]});
		const uint256eU4SAR0 = await ZADa44iLG.allowance.call(addresstg619Qq, addressF2GXw6b, {from: accounts[2]});
		const uint256s34lqOs = await ZADa44iLG.allowance.call(addressxd2lVQd, addressU5o92Dm, {from: accounts[5]});
		const boolIzRoU3Y = await ZADa44iLG.approve.call(address1EWO41, uintroaQfGw, {from: accounts[4]});
		const stringIc6EChY = await ZADa44iLG.symbol.call({from: accounts[0]});

		assert.equal(boolIzRoU3Y, true)
		assert.equal(stringBwY51lb, "ZAD")
		assert.equal(stringIc6EChY, "ZAD")
		assert.equal(uint256eU4SAR0, BigInt("0"))
		assert.equal(uint256s34lqOs, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADa44iLG = await ZAD.new({from: accounts[4]});
		const addresstgOSOk = accounts[3]
		const addressCYYAVkU = accounts[2]
		const uintPGCZUbQ = BigInt("551")
		const addressAtsNFSF = accounts[5]
		const addresssEuSs9u = accounts[4]
		const addressVAbDvgW = accounts[3]
		const addresstB1pCmx = accounts[5]
		const uintarYhpul = BigInt("1090")
		const addresstcXjRkk = "0x0000000000000000000000000000000000000001"
		const uintTniWE0h = BigInt("1747")
		const addressspf4ijZ = accounts[2]
		const stringfT8zfQT = await ZADa44iLG.name.call({from: accounts[3]});
		const stringBwY51lb = await ZADa44iLG.symbol.call({from: accounts[3]});
		const uint256eU4SAR0 = await ZADa44iLG.allowance.call(addressCYYAVkU, addresstgOSOk, {from: accounts[2]});
		const boolTvb8gf = await ZADa44iLG.transferFrom.call(addresssEuSs9u, addressAtsNFSF, uintPGCZUbQ, {from: accounts[1]});
		const uint256s34lqOs = await ZADa44iLG.allowance.call(addresstB1pCmx, addressVAbDvgW, {from: accounts[5]});
		const boolIzRoU3Y = await ZADa44iLG.approve.call(addresstcXjRkk, uintarYhpul, {from: accounts[4]});
		const boolbS4rHV = await ZADa44iLG.increaseAllowance.call(addressspf4ijZ, uintTniWE0h, {from: accounts[0]});
		const stringIc6EChY = await ZADa44iLG.symbol.call({from: accounts[0]});

		assert.equal(stringBwY51lb, "ZAD")
		assert.equal(stringfT8zfQT, "Zadkiel")
		assert.equal(uint256eU4SAR0, BigInt("0"))
		await expect(ZADa44iLG.transferFrom.call(addresssEuSs9u, addressAtsNFSF, uintPGCZUbQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADlqZ7yOn = await ZAD.new({from: accounts[3]});
		const uintU2LwRC6 = BigInt("1698")
		const addressrz0gSs8 = "0x0000000000000000000000000000000000000000"
		const uint8SnCwqNV = await ZADlqZ7yOn.decimals.call({from: accounts[4]});
		const uint256HaR3jWa = await ZADlqZ7yOn.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8LXu0l6K = await ZADlqZ7yOn.decimals.call({from: accounts[1]});
		const booldU4tCs7 = await ZADlqZ7yOn.approve.call(addressrz0gSs8, uintU2LwRC6, {from: accounts[4]});

		assert.equal(uint256HaR3jWa, BigInt("100000000000000000000000000"))
		assert.equal(uint8LXu0l6K, BigInt("18"))
		assert.equal(uint8SnCwqNV, BigInt("18"))
		await expect(ZADlqZ7yOn.approve.call(addressrz0gSs8, uintU2LwRC6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})