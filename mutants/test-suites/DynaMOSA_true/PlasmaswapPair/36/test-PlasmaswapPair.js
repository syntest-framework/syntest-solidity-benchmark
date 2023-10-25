const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairmmC9ZeR = await PlasmaswapPair.new({from: accounts[1]});
		const addressdZcVvyo = accounts[0]
		const addressHSFUpeE = accounts[4]
		const addressxs91rI2 = accounts[2]
//		const addressdp9brf5 = await PlasmaswapPairmmC9ZeR.skim.call(addressdZcVvyo, {from: accounts[5]});
//		const uintlmXWQa = await PlasmaswapPairmmC9ZeR.burn.call(addressHSFUpeE, {from: accounts[3]});
//		const addressoKFucEm = await PlasmaswapPairmmC9ZeR.skim.call(addressxs91rI2, {from: accounts[2]});

		await expect(PlasmaswapPairmmC9ZeR.skim.call(addressdZcVvyo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairbz1xmzq = await PlasmaswapPair.new({from: accounts[2]});
		const addresswUJO84 = "0x0000000000000000000000000000000000000001"
//		await PlasmaswapPairbz1xmzq.lock.call({from: accounts[4]});
//		const uintLuDCo8e = await PlasmaswapPairbz1xmzq.burn.call(addresswUJO84, {from: "0x0000000000000000000000000000000000000001"});
//		await PlasmaswapPairbz1xmzq.lock.call({from: accounts[5]});
//		await PlasmaswapPairbz1xmzq.lock.call({from: accounts[3]});

		await expect(PlasmaswapPairbz1xmzq.lock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairnM57Cys = await PlasmaswapPair.new({from: accounts[4]});
		const addressyaA1JyJ = accounts[1]
		const addressg1333IT = accounts[0]
		const addressF2HE95X = accounts[1]
		const addresssrSqdmM = accounts[1]
//		const uintyvali1 = await PlasmaswapPairnM57Cys.mint.call(addressyaA1JyJ, {from: accounts[1]});
//		await PlasmaswapPairnM57Cys.lock.call({from: accounts[4]});
//		const addressjYIcbn3 = await PlasmaswapPairnM57Cys.initialize.call(addressF2HE95X, addressg1333IT, {from: "0x0000000000000000000000000000000000000001"});
//		const uint112aKa0MGY = await PlasmaswapPairnM57Cys.getReserves.call({from: accounts[3]});
//		const uintzRWLYYG = await PlasmaswapPairnM57Cys.burn.call(addresssrSqdmM, {from: accounts[0]});

		await expect(PlasmaswapPairnM57Cys.mint.call(addressyaA1JyJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairxWCL0lB = await PlasmaswapPair.new({from: accounts[2]});
		const addressGQHaodt = accounts[2]
		const address53j6hl = accounts[0]
		const addressyDN2vPQ = accounts[0]
		const addressFPPqSG3 = accounts[5]
		const uint112b1BNVpG = await PlasmaswapPairxWCL0lB.getReserves.call({from: accounts[5]});
//		const uintP03cxzW = await PlasmaswapPairxWCL0lB.burn.call(addressGQHaodt, {from: accounts[2]});
//		const uintfhNMYeg = await PlasmaswapPairxWCL0lB.mint.call(address53j6hl, {from: accounts[5]});
//		const uintA9RnO7e = await PlasmaswapPairxWCL0lB.burn.call(addressyDN2vPQ, {from: accounts[5]});
//		const uintOTRXrR3 = await PlasmaswapPairxWCL0lB.mint.call(addressFPPqSG3, {from: accounts[0]});

		await expect(PlasmaswapPairxWCL0lB.burn.call(addressGQHaodt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairYXqk2gq = await PlasmaswapPair.new({from: accounts[3]});
		const addressb868Us = accounts[1]
		const addresspPixpVe = accounts[1]
		const addressTZR3zfE = accounts[3]
		const addressSs7iVSi = accounts[5]
//		const addressaResLpN = await PlasmaswapPairYXqk2gq.initialize.call(addresspPixpVe, addressb868Us, {from: accounts[5]});
//		const uint112ZIrAwoR = await PlasmaswapPairYXqk2gq.getReserves.call({from: accounts[1]});
//		const uint77qxrg = await PlasmaswapPairYXqk2gq.mint.call(addressTZR3zfE, {from: accounts[2]});
//		const uintTvXQcyl = await PlasmaswapPairYXqk2gq.mint.call(addressSs7iVSi, {from: accounts[1]});
//		const uint112qNPLta = await PlasmaswapPairYXqk2gq.getReserves.call({from: accounts[4]});
//		const uint112CwAJa4y = await PlasmaswapPairYXqk2gq.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairYXqk2gq.initialize.call(addresspPixpVe, addressb868Us, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairYXqk2gq = await PlasmaswapPair.new({from: accounts[3]});
//		await PlasmaswapPairYXqk2gq.sync.call({from: accounts[0]});
//		await PlasmaswapPairYXqk2gq.lock.call({from: accounts[2]});
//		const uint112ZIrAwoR = await PlasmaswapPairYXqk2gq.getReserves.call({from: accounts[1]});
//		const uint112CwAJa4y = await PlasmaswapPairYXqk2gq.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairYXqk2gq.sync.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair8SHfmA = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressosGFAxD = accounts[5]
		const addressVtC44OH = await PlasmaswapPair8SHfmA.skim.call(addressosGFAxD, {from: accounts[1]});
		const uint112H6IzO1Z = await PlasmaswapPair8SHfmA.getReserves.call({from: accounts[3]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairPQQrk7 = await PlasmaswapPair.new({from: accounts[2]});
		const bytehTPmbwt = "0x0e000c0b190b031d051e120c"
		const addressd2DQK7L = accounts[1]
		const uintoV8nsQe = BigInt("1658")
		const uintgSHl0r8 = BigInt("1612")
		const addresshp7TvyC = accounts[1]
		const bytebfHH6ag = "0x1e05191a040209151b101a0f0910"
		const addressLUT8Kc4 = accounts[0]
		const uintTKtSW71 = BigInt("1402")
		const uintKWfaXge = BigInt("347")
//		const uinth1zCoqE = await PlasmaswapPairPQQrk7.swap.call(uintgSHl0r8, uintoV8nsQe, addressd2DQK7L, bytehTPmbwt, {from: accounts[3]});
//		await PlasmaswapPairPQQrk7.lock.call({from: accounts[0]});
//		const uintWcdhvXj = await PlasmaswapPairPQQrk7.mint.call(addresshp7TvyC, {from: accounts[3]});
//		const uintdeIZKiS = await PlasmaswapPairPQQrk7.swap.call(uintKWfaXge, uintTKtSW71, addressLUT8Kc4, bytebfHH6ag, {from: accounts[1]});
//		await PlasmaswapPairPQQrk7.lock.call({from: accounts[5]});
//		const uint112hkXsLhj = await PlasmaswapPairPQQrk7.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairPQQrk7.swap.call(uintgSHl0r8, uintoV8nsQe, addressd2DQK7L, bytehTPmbwt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairPQQrk7 = await PlasmaswapPair.new({from: accounts[2]});
		const addressAT2vi9M = accounts[4]
		const addresslZ5nUDG = accounts[0]
		const byteofokb9 = "0x0e000c0b190b031d051e120c"
		const addresssGFCzIG = accounts[1]
		const uintN4eZWVP = BigInt("1658")
		const uintQd7Ozk = BigInt("1612")
		const bytehh4UQ7 = "0x001e181d1f08060d0d111d091920171d020a0c14131f11"
		const addresswdlv0A4 = accounts[2]
		const uintK0g2Aac = BigInt("585")
		const uintwUsXrg = BigInt("354")
		const addresstyfoOSM = accounts[1]
		const bytesfUHzOO = "0x1e05191a040209151b101a0f0910"
		const addressHHfwMOx = accounts[0]
		const uintn3yTDrb = BigInt("1402")
		const uintgxoPuLV = BigInt("347")
		const byteWiCLGtE = "0x05110c07120d16"
		const addressJQ0jrMg = accounts[4]
		const uintfl09FUC = BigInt("796")
		const uint3SQfuX = BigInt("183")
		const addressfZTJFng = await PlasmaswapPairPQQrk7.initialize.call(addresslZ5nUDG, addressAT2vi9M, {from: accounts[2]});
//		const uinth1zCoqE = await PlasmaswapPairPQQrk7.swap.call(uintQd7Ozk, uintN4eZWVP, addresssGFCzIG, byteofokb9, {from: accounts[3]});
//		await PlasmaswapPairPQQrk7.lock.call({from: accounts[0]});
//		const uintAx9CBio = await PlasmaswapPairPQQrk7.swap.call(uintwUsXrg, uintK0g2Aac, addresswdlv0A4, bytehh4UQ7, {from: accounts[1]});
//		const uintWcdhvXj = await PlasmaswapPairPQQrk7.mint.call(addresstyfoOSM, {from: accounts[3]});
//		await PlasmaswapPairPQQrk7.lock.call({from: accounts[4]});
//		const uintdeIZKiS = await PlasmaswapPairPQQrk7.swap.call(uintgxoPuLV, uintn3yTDrb, addressHHfwMOx, bytesfUHzOO, {from: accounts[1]});
//		await PlasmaswapPairPQQrk7.lock.call({from: accounts[3]});
//		await PlasmaswapPairPQQrk7.lock.call({from: accounts[5]});
//		const uint112hkXsLhj = await PlasmaswapPairPQQrk7.getReserves.call({from: accounts[4]});
//		const uintyglNdnL = await PlasmaswapPairPQQrk7.swap.call(uint3SQfuX, uintfl09FUC, addressJQ0jrMg, byteWiCLGtE, {from: accounts[1]});

		await expect(PlasmaswapPairPQQrk7.swap.call(uintQd7Ozk, uintN4eZWVP, addresssGFCzIG, byteofokb9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})