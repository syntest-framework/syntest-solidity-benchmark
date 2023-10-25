const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhGxbUj = await PlasmaswapPair.new({from: accounts[4]});
		const addressraMR2xw = accounts[0]
		const addressYvKoTUq = accounts[4]
		const addressKtaQI6r = accounts[2]
		const addressWXss1gN = accounts[4]
		const addresscqDIoiR = accounts[3]
		const addressuWqir2 = accounts[4]
		const addressNE6oxfw = await PlasmaswapPairhGxbUj.initialize.call(addressYvKoTUq, addressraMR2xw, {from: accounts[4]});
		const addressz8UbgSG = await PlasmaswapPairhGxbUj.skim.call(addressKtaQI6r, {from: accounts[4]});
		const address1s6xLT = await PlasmaswapPairhGxbUj.initialize.call(addresscqDIoiR, addressWXss1gN, {from: accounts[4]});
		const uintYT1FPRs = await PlasmaswapPairhGxbUj.mint.call(addressuWqir2, {from: accounts[3]});
		const uint112hF6vjJ9 = await PlasmaswapPairhGxbUj.getReserves.call({from: accounts[1]});

		await expect(PlasmaswapPairhGxbUj.skim.call(addressKtaQI6r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairSCvjtYc = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const bytewxdeBSl = "0x1e200b1316140a1f0b011d140d121b0017041413130c1816051105"
		const addressQLtTIA = accounts[0]
		const uintNdVwmOo = BigInt("395")
		const uintqK70pk5 = BigInt("229")
		const addressHslXWEi = accounts[3]
		const byteVfi3KB = "0x14051208"
		const addresslvbWfEX = accounts[3]
		const uintJETNfiy = BigInt("973")
		const uintKEQXh9C = BigInt("1551")
		const addressH0E6ZfA = accounts[3]
		const uinttEXpbq = await PlasmaswapPairSCvjtYc.swap.call(uintqK70pk5, uintNdVwmOo, addressQLtTIA, bytewxdeBSl, {from: accounts[4]});
		const addressf7mhXFO = await PlasmaswapPairSCvjtYc.skim.call(addressHslXWEi, {from: "0x0000000000000000000000000000000000000001"});
		const uintsRlhZOR = await PlasmaswapPairSCvjtYc.swap.call(uintKEQXh9C, uintJETNfiy, addresslvbWfEX, byteVfi3KB, {from: accounts[3]});
		const addressvZgN7QD = await PlasmaswapPairSCvjtYc.skim.call(addressH0E6ZfA, {from: accounts[5]});
		await PlasmaswapPairSCvjtYc.sync.call({from: accounts[2]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairtRjLri = await PlasmaswapPair.new({from: accounts[2]});
		const address7XBWuk = accounts[4]
		const addressFfv0M5c = accounts[2]
		await PlasmaswapPairtRjLri.sync.call({from: accounts[2]});
		const uint112wY2xxsU = await PlasmaswapPairtRjLri.getReserves.call({from: accounts[2]});
		const uintMp69Irt = await PlasmaswapPairtRjLri.burn.call(address7XBWuk, {from: accounts[1]});
		const uintGluIy58 = await PlasmaswapPairtRjLri.burn.call(addressFfv0M5c, {from: accounts[3]});

		await expect(PlasmaswapPairtRjLri.sync.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairsHldsmv = await PlasmaswapPair.new({from: accounts[0]});
		const addressi89oiqt = accounts[3]
		const addressszeE2dD = accounts[0]
		const addressQp3QBeN = accounts[5]
		const uintw1neGV = await PlasmaswapPairsHldsmv.mint.call(addressi89oiqt, {from: accounts[0]});
		await PlasmaswapPairsHldsmv.lock.call({from: accounts[4]});
		const uintJNxq86r = await PlasmaswapPairsHldsmv.burn.call(addressszeE2dD, {from: accounts[0]});
		const uintdu4wqBs = await PlasmaswapPairsHldsmv.burn.call(addressQp3QBeN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairsHldsmv.mint.call(addressi89oiqt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairl26aOP1 = await PlasmaswapPair.new({from: accounts[1]});
		const addressw0RsAMK = accounts[1]
		const uintiAv9H1V = await PlasmaswapPairl26aOP1.burn.call(addressw0RsAMK, {from: accounts[0]});
		await PlasmaswapPairl26aOP1.sync.call({from: accounts[3]});
		await PlasmaswapPairl26aOP1.sync.call({from: accounts[0]});

		await expect(PlasmaswapPairl26aOP1.burn.call(addressw0RsAMK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairGbs1Ccc = await PlasmaswapPair.new({from: accounts[0]});
		const addressG0m5hjl = accounts[3]
		await PlasmaswapPairGbs1Ccc.lock.call({from: accounts[2]});
		const uintXuqjiG0 = await PlasmaswapPairGbs1Ccc.burn.call(addressG0m5hjl, {from: accounts[3]});
		await PlasmaswapPairGbs1Ccc.sync.call({from: accounts[4]});

		await expect(PlasmaswapPairGbs1Ccc.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairE6odHRV = await PlasmaswapPair.new({from: accounts[2]});
		const byter5uY7DO = "0x000e171b0e201109161d051d060813121716"
		const addressyy2DEjJ = accounts[4]
		const uintTaAy7Ci = BigInt("1148")
		const uintTITvZc = BigInt("1539")
		const addressqK4NfBT = accounts[0]
		const address4EPzI9 = accounts[3]
		const addressWAzBHbO = accounts[4]
		const uintxaO3aik = await PlasmaswapPairE6odHRV.swap.call(uintTITvZc, uintTaAy7Ci, addressyy2DEjJ, byter5uY7DO, {from: accounts[2]});
		const addressiHKfKhU = await PlasmaswapPairE6odHRV.initialize.call(address4EPzI9, addressqK4NfBT, {from: accounts[5]});
		const uintnJoFCeM = await PlasmaswapPairE6odHRV.burn.call(addressWAzBHbO, {from: accounts[4]});
		await PlasmaswapPairE6odHRV.lock.call({from: accounts[3]});

		await expect(PlasmaswapPairE6odHRV.swap.call(uintTITvZc, uintTaAy7Ci, addressyy2DEjJ, byter5uY7DO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairCvTYJA5 = await PlasmaswapPair.new({from: accounts[1]});
		const addresscaL1on = accounts[1]
		const addressc0NHxiO = accounts[0]
		const addressKhLva3 = accounts[3]
		const addressojh62F4 = accounts[2]
		const addressQqtxvqV = accounts[3]
		const addressy6I1i2 = await PlasmaswapPairCvTYJA5.initialize.call(addressc0NHxiO, addresscaL1on, {from: accounts[0]});
		await PlasmaswapPairCvTYJA5.lock.call({from: accounts[1]});
		const uintSd9Jwjx = await PlasmaswapPairCvTYJA5.mint.call(addressKhLva3, {from: accounts[3]});
		const addressf9BIJxD = await PlasmaswapPairCvTYJA5.initialize.call(addressQqtxvqV, addressojh62F4, {from: accounts[5]});

		await expect(PlasmaswapPairCvTYJA5.initialize.call(addressc0NHxiO, addresscaL1on, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})