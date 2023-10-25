const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEO4jzbzG = await REXUNIFINANCE.new({from: accounts[5]});
		const addresswC8ysYF = accounts[2]
		const uint4tuZwP = BigInt("704")
		const addressXXMidAv = accounts[2]
		const uint256wzN2Qn0 = await REXUNIFINANCEO4jzbzG.balanceOf.call(addresswC8ysYF, {from: accounts[5]});
//		const boolGZ71Jzn = await REXUNIFINANCEO4jzbzG.transfer.call(addressXXMidAv, uint4tuZwP, {from: accounts[2]});

		assert.equal(uint256wzN2Qn0, BigInt("0"))
		await expect(REXUNIFINANCEO4jzbzG.transfer.call(addressXXMidAv, uint4tuZwP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEuZeIN5s = await REXUNIFINANCE.new({from: accounts[0]});
		const uintKteBqBY = BigInt("1855")
		const addressWGhLDxX = accounts[2]
		const addressNJev1zW = accounts[0]
		const addressTHWv5dK = accounts[5]
		const addresso4nmsgy = accounts[1]
		const uintg2a47mo = BigInt("420")
		const addressnlix4LH = accounts[1]
		const addresss6RvS1c = accounts[3]
//		const boolKZhh2Nk = await REXUNIFINANCEuZeIN5s.transferFrom.call(addressNJev1zW, addressWGhLDxX, uintKteBqBY, {from: accounts[0]});
//		const addresst7VTM2r = await REXUNIFINANCEuZeIN5s.transferOwnership.call(addressTHWv5dK, {from: accounts[1]});
//		const addressqbA1slH = await REXUNIFINANCEuZeIN5s.transferOwnership.call(addresso4nmsgy, {from: accounts[0]});
//		const boolSXDrbzK = await REXUNIFINANCEuZeIN5s.transferFrom.call(addresss6RvS1c, addressnlix4LH, uintg2a47mo, {from: accounts[4]});

		await expect(REXUNIFINANCEuZeIN5s.transferFrom.call(addressNJev1zW, addressWGhLDxX, uintKteBqBY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEtYsoeRi = await REXUNIFINANCE.new({from: accounts[0]});
		const addressoIelbx = accounts[1]
		const addressmW4QmD4 = accounts[2]
		const addressgAq5eye = accounts[5]
		const uintTSzlPBJ = BigInt("511")
		const addressBuTHMj = accounts[2]
		const uintgMpxaIv = BigInt("1355")
		const addressobowg7j = accounts[3]
		const addressXMT1cPU = accounts[0]
		const uint256AysUfUK = await REXUNIFINANCEtYsoeRi.transferableTokens.call(addressoIelbx, {from: accounts[5]});
		const uint256CIryzZM = await REXUNIFINANCEtYsoeRi.allowance.call(addressgAq5eye, addressmW4QmD4, {from: accounts[0]});
		const boolAgEprwe = await REXUNIFINANCEtYsoeRi.increaseApproval.call(addressBuTHMj, uintTSzlPBJ, {from: accounts[1]});
//		const boolqwXevQt = await REXUNIFINANCEtYsoeRi.transferFrom.call(addressXMT1cPU, addressobowg7j, uintgMpxaIv, {from: accounts[2]});

		assert.equal(boolAgEprwe, true)
		assert.equal(uint256AysUfUK, BigInt("0"))
		assert.equal(uint256CIryzZM, BigInt("0"))
		await expect(REXUNIFINANCEtYsoeRi.transferFrom.call(addressXMT1cPU, addressobowg7j, uintgMpxaIv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEkifwZXP = await REXUNIFINANCE.new({from: accounts[3]});
		const uintO254sSp = BigInt("1116")
		const addressCPSXRZJ = accounts[1]
		const uintn5WF6p = BigInt("1412")
		const addressf5Bj1I = accounts[4]
		const addressDhDkq2Q = accounts[0]
		const addressdihfjaN = "0x0000000000000000000000000000000000000001"
		const boolbUYNbtp = await REXUNIFINANCEkifwZXP.approve.call(addressCPSXRZJ, uintO254sSp, {from: "0x0000000000000000000000000000000000000001"});
		const boolPXzeuBW = await REXUNIFINANCEkifwZXP.decreaseApproval.call(addressf5Bj1I, uintn5WF6p, {from: accounts[5]});
		const uint256QI1bEhL = await REXUNIFINANCEkifwZXP.allowance.call(addressdihfjaN, addressDhDkq2Q, {from: accounts[0]});

		assert.equal(boolPXzeuBW, true)
		assert.equal(boolbUYNbtp, true)
		assert.equal(uint256QI1bEhL, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEHYRpf5W = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMflcUBU = BigInt("815")
		const addressTZQev6Y = accounts[2]
		const addressCb5aYeN = "0x0000000000000000000000000000000000000001"
		const uintzcVKJ3C = BigInt("978")
		const addressqsfk2E = accounts[0]
		const addressp4SjzWy = accounts[2]
		const addressDCjWNOy = accounts[2]
		const uinth5DoXa = BigInt("1602")
		const addressYHQl1BO = accounts[2]
		const addressN8gBwPp = accounts[1]
		const uintoXR1U8V = BigInt("904")
		const addressPtsO2qV = "0x0000000000000000000000000000000000000001"
		const boolArctOA9 = await REXUNIFINANCEHYRpf5W.transferFrom.call(addressCb5aYeN, addressTZQev6Y, uintMflcUBU, {from: accounts[2]});
		const boolYZRV8ZK = await REXUNIFINANCEHYRpf5W.transferFrom.call(addressp4SjzWy, addressqsfk2E, uintzcVKJ3C, {from: accounts[0]});
		const addressh9k7nt7 = await REXUNIFINANCEHYRpf5W.transferOwnership.call(addressDCjWNOy, {from: accounts[4]});
		const boolgqS4O9R = await REXUNIFINANCEHYRpf5W.transferFrom.call(addressN8gBwPp, addressYHQl1BO, uinth5DoXa, {from: accounts[2]});
		const boolz981B8q = await REXUNIFINANCEHYRpf5W.approve.call(addressPtsO2qV, uintoXR1U8V, {from: accounts[2]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEtYsoeRi = await REXUNIFINANCE.new({from: accounts[0]});
		const addressIUNjKhf = accounts[1]
		const addressiidseHK = accounts[2]
		const addressM4IxGCY = accounts[5]
		const uinttuqekbX = BigInt("511")
		const addressAqzdKe8 = accounts[3]
		const addressuL9qidP = accounts[3]
		const uintmyNQMCg = BigInt("1355")
		const addressQ9k2k2e = accounts[3]
		const addressHntL1Gx = accounts[0]
		const uint256AysUfUK = await REXUNIFINANCEtYsoeRi.transferableTokens.call(addressIUNjKhf, {from: accounts[5]});
		const uint256CIryzZM = await REXUNIFINANCEtYsoeRi.allowance.call(addressM4IxGCY, addressiidseHK, {from: accounts[0]});
		const boolAgEprwe = await REXUNIFINANCEtYsoeRi.increaseApproval.call(addressAqzdKe8, uinttuqekbX, {from: accounts[1]});
//		const addressd4VvfS = await REXUNIFINANCEtYsoeRi.transferOwnership.call(addressuL9qidP, {from: accounts[2]});
//		const boolqwXevQt = await REXUNIFINANCEtYsoeRi.transferFrom.call(addressHntL1Gx, addressQ9k2k2e, uintmyNQMCg, {from: accounts[2]});

		assert.equal(boolAgEprwe, true)
		assert.equal(uint256AysUfUK, BigInt("0"))
		assert.equal(uint256CIryzZM, BigInt("0"))
		await expect(REXUNIFINANCEtYsoeRi.transferOwnership.call(addressuL9qidP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})