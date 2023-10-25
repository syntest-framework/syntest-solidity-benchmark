const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinlw3kN1C = await DJCoin.new({from: accounts[2]});
		const uintAOGT8OM = BigInt("1303")
		const addressUfGx0Vd = accounts[4]
		const addressNSIVytW = accounts[1]
		const uintlCmCEU4 = BigInt("752")
		const addressuWnNfU = accounts[3]
		const uintD5J3caw = BigInt("66")
		const addresspOPsOyO = accounts[4]
		const boolhwUgcx9 = await DJCoinlw3kN1C.transferFrom.call(addressNSIVytW, addressUfGx0Vd, uintAOGT8OM, {from: accounts[3]});
		const boolSijKmY = await DJCoinlw3kN1C.decreaseAllowance.call(addressuWnNfU, uintlCmCEU4, {from: accounts[0]});
		const boolP6Mo7MB = await DJCoinlw3kN1C.decreaseAllowance.call(addresspOPsOyO, uintD5J3caw, {from: accounts[5]});

		await expect(DJCoinlw3kN1C.transferFrom.call(addressNSIVytW, addressUfGx0Vd, uintAOGT8OM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinSQ6Vdw4 = await DJCoin.new({from: accounts[5]});
		const uintedb0AA9 = BigInt("1459")
		const uintTkIdDLR = BigInt("992")
		const addresskX3uBnK = accounts[3]
		const uintHKxGJP1 = BigInt("1454")
		const addressmOttRJ6 = accounts[3]
		const addressCR2HWWe = accounts[0]
		const uintgE5pRKZ = BigInt("267")
		const addresswvtcaq = accounts[5]
		const uintZ4Kk89T = BigInt("185")
		const addressasAaAIF = accounts[4]
		const uint256a1EKSTd = await DJCoinSQ6Vdw4.burn.call(uintTkIdDLR, uintedb0AA9, {from: accounts[0]});
		const uint256JLnrvPg = await DJCoinSQ6Vdw4.balanceOf.call(addresskX3uBnK, {from: accounts[3]});
		const boolru9Jgpm = await DJCoinSQ6Vdw4.transferFrom.call(addressCR2HWWe, addressmOttRJ6, uintHKxGJP1, {from: "0x0000000000000000000000000000000000000001"});
		const boolRt63QnX = await DJCoinSQ6Vdw4.transfer.call(addresswvtcaq, uintgE5pRKZ, {from: accounts[2]});
		const boolnObvHeB = await DJCoinSQ6Vdw4.increaseAllowance.call(addressasAaAIF, uintZ4Kk89T, {from: accounts[5]});

		await expect(DJCoinSQ6Vdw4.burn.call(uintTkIdDLR, uintedb0AA9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkytdf1V = await DJCoin.new({from: accounts[3]});
		const uintbgS5Se6 = BigInt("432")
		const addressLU0uWqm = accounts[1]
		const uintNy5gbIy = BigInt("1991")
		const uintGP7ZKX0 = BigInt("604")
		const addressHYxHwq0 = accounts[0]
		const uinttE99Sz3 = BigInt("1543")
		const addressx7iSTdx = accounts[2]
		const uintmbrXo6C = BigInt("598")
		const addressVyApI0h = accounts[4]
		const uintIWoaUtP = BigInt("1534")
		const addressfIbBPjK = accounts[3]
		const boolY1X9RlW = await DJCoinkytdf1V.increaseAllowance.call(addressLU0uWqm, uintbgS5Se6, {from: accounts[1]});
		const boolN2NkreV = await DJCoinkytdf1V.changetokensPerBlock.call(uintNy5gbIy, {from: accounts[4]});
		const boolaPH9kd = await DJCoinkytdf1V.transfer.call(addressHYxHwq0, uintGP7ZKX0, {from: accounts[3]});
		const boolSfTCjcG = await DJCoinkytdf1V.decreaseAllowance.call(addressx7iSTdx, uinttE99Sz3, {from: accounts[4]});
		const boolELqxyB = await DJCoinkytdf1V.transfer.call(addressVyApI0h, uintmbrXo6C, {from: "0x0000000000000000000000000000000000000001"});
		const booldPZIFHB = await DJCoinkytdf1V.transfer.call(addressfIbBPjK, uintIWoaUtP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolN2NkreV, true)
		assert.equal(boolSfTCjcG, true)
		assert.equal(boolY1X9RlW, true)
		assert.equal(boolaPH9kd, true)
		await expect(DJCoinkytdf1V.transfer.call(addressVyApI0h, uintmbrXo6C, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoini5DtusK = await DJCoin.new({from: accounts[5]});
		const uintdJK05ba = BigInt("1948")
		const addresskGVrlnl = accounts[1]
		const uintkqsg1XK = BigInt("304")
		const addressqyLw5W = "0x0000000000000000000000000000000000000001"
		const addressSPA05nj = accounts[1]
		const boolYIUK4G = await DJCoini5DtusK.approve.call(addresskGVrlnl, uintdJK05ba, {from: accounts[2]});
		const uint256m8Ggl2H = await DJCoini5DtusK.totalSupply.call({from: accounts[4]});
		const boolve4kOAf = await DJCoini5DtusK.transfer.call(addressqyLw5W, uintkqsg1XK, {from: accounts[2]});
		const addressg4PLTuO = await DJCoini5DtusK.validRecipient.call(addressSPA05nj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYIUK4G, true)
		assert.equal(uint256m8Ggl2H, BigInt("2100000000000"))
		await expect(DJCoini5DtusK.transfer.call(addressqyLw5W, uintkqsg1XK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinXsPox1i = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqavSCN4 = "0x0000000000000000000000000000000000000001"
		const uintKo7eNj0 = BigInt("1227")
		const addressn2JMUnQ = "0x0000000000000000000000000000000000000001"
		const addressZwpP4MI = accounts[3]
		const addressnunDb0P = await DJCoinXsPox1i.validRecipient.call(addressqavSCN4, {from: accounts[1]});
		const boolR8gLqhv = await DJCoinXsPox1i.transferFrom.call(addressZwpP4MI, addressn2JMUnQ, uintKo7eNj0, {from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinUwo7iIS = await DJCoin.new({from: accounts[1]});
		const addressYm4orzg = accounts[3]
		const addressewUaZsQ = accounts[3]
		const uint256paz1VEX = await DJCoinUwo7iIS.balanceOf.call(addressYm4orzg, {from: accounts[1]});
		const uint256RQuLIAt = await DJCoinUwo7iIS.totalSupply.call({from: accounts[3]});
		const addressGRwxL4z = await DJCoinUwo7iIS.validRecipient.call(addressewUaZsQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256RQuLIAt, BigInt("2100000000000"))
		assert.equal(uint256paz1VEX, BigInt("0"))
		await expect(DJCoinUwo7iIS.validRecipient.call(addressewUaZsQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinjGPvHWO = await DJCoin.new({from: accounts[3]});
		const uintIF3HYq = BigInt("1670")
		const addressvJlAbkl = accounts[1]
		const addressmHKfmDo = accounts[3]
		const addresslkZTcHu = accounts[5]
		const uint256dsvjn4B = await DJCoinjGPvHWO.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolbH5D5fQ = await DJCoinjGPvHWO.decreaseAllowance.call(addressvJlAbkl, uintIF3HYq, {from: accounts[2]});
		const uint256aJId8dJ = await DJCoinjGPvHWO.allowance.call(addresslkZTcHu, addressmHKfmDo, {from: accounts[0]});
		const uint256WlJoyP = await DJCoinjGPvHWO.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbH5D5fQ, true)
		assert.equal(uint256WlJoyP, BigInt("2100000000000"))
		assert.equal(uint256aJId8dJ, BigInt("0"))
		assert.equal(uint256dsvjn4B, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinnv3GJC8 = await DJCoin.new({from: accounts[1]});
		const addressSaiqIHd = accounts[4]
		const uintjekxSC = BigInt("1636")
		const uintd9CAP8L = BigInt("123")
		const uintaXFdw9x = BigInt("241")
		const addressaEoHMpz = accounts[4]
		const addressoqdXFU = await DJCoinnv3GJC8.transferOwnership.call(addressSaiqIHd, {from: accounts[1]});
		const uint256N4K3QRW = await DJCoinnv3GJC8.burn.call(uintd9CAP8L, uintjekxSC, {from: accounts[3]});
		const boolSltOt15 = await DJCoinnv3GJC8.transfer.call(addressaEoHMpz, uintaXFdw9x, {from: accounts[0]});

		await expect(DJCoinnv3GJC8.burn.call(uintd9CAP8L, uintjekxSC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnv3GJC8 = await DJCoin.new({from: accounts[1]});
		const addressgcnVgxq = accounts[1]
		await DJCoinnv3GJC8.renounceOwnership.call({from: accounts[1]});
		await DJCoinnv3GJC8.onlyOwner.call({from: accounts[3]});
		const addressfhYPjln = await DJCoinnv3GJC8.transferOwnership.call(addressgcnVgxq, {from: accounts[1]});

		await expect(DJCoinnv3GJC8.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnv3GJC8 = await DJCoin.new({from: accounts[1]});
		const uintqCYNSo = BigInt("138")
		const addressPlPNwfE = accounts[4]
		const addressJbaE7O = await DJCoinnv3GJC8.owner.call({from: accounts[4]});
		const boolSltOt15 = await DJCoinnv3GJC8.transfer.call(addressPlPNwfE, uintqCYNSo, {from: accounts[0]});
		await DJCoinnv3GJC8.renounceOwnership.call({from: accounts[1]});

		assert.equal(addressJbaE7O, 0xcf2acBFE296C6d23a114fa37Ab2cE53403146E0C)
		await expect(DJCoinnv3GJC8.transfer.call(addressPlPNwfE, uintqCYNSo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnv3GJC8 = await DJCoin.new({from: accounts[1]});
		const uintFttYfQU = BigInt("680")
		const uintEHGOSzW = BigInt("903")
		const uintrS7q9wH = BigInt("218")
		const addresszbuDyY = accounts[4]
		const uint256vatE97A = await DJCoinnv3GJC8.burn.call(uintEHGOSzW, uintFttYfQU, {from: accounts[1]});
		const boolSltOt15 = await DJCoinnv3GJC8.transfer.call(addresszbuDyY, uintrS7q9wH, {from: accounts[0]});

		assert.equal(uint256vatE97A, BigInt("1957200000000"))
		await expect(DJCoinnv3GJC8.transfer.call(addresszbuDyY, uintrS7q9wH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinnv3GJC8 = await DJCoin.new({from: accounts[1]});
		const uintfjtztlS = BigInt("0")
		const addressUQFK9vS = accounts[5]
		const boolSltOt15 = await DJCoinnv3GJC8.transfer.call(addressUQFK9vS, uintfjtztlS, {from: accounts[0]});

		assert.equal(boolSltOt15, true)
	});
})