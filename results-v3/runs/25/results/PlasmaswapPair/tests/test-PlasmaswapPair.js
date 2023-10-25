const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairfkrO11q = await PlasmaswapPair.new({from: accounts[2]});
		const addressBcFO5tc = accounts[4]
		const addressudh4ZcL = accounts[0]
		const addressTimhAqc = accounts[0]
		const addressOQ6p4pN = accounts[0]
		const addressMVTE6P4 = accounts[3]
		const addresszvDMSFn = await PlasmaswapPairfkrO11q.initialize.call(addressudh4ZcL, addressBcFO5tc, {from: accounts[2]});
		const address378lQ1 = await PlasmaswapPairfkrO11q.skim.call(addressTimhAqc, {from: accounts[3]});
		const addressHqyn7cJ = await PlasmaswapPairfkrO11q.initialize.call(addressMVTE6P4, addressOQ6p4pN, {from: accounts[0]});
		const uint112gSpFLGD = await PlasmaswapPairfkrO11q.getReserves.call({from: accounts[1]});
		await PlasmaswapPairfkrO11q.lock.call({from: accounts[2]});
		const uint112PFWHcYW = await PlasmaswapPairfkrO11q.getReserves.call({from: accounts[0]});

		await expect(PlasmaswapPairfkrO11q.skim.call(addressTimhAqc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairg4Levm3 = await PlasmaswapPair.new({from: accounts[4]});
		const byteb2IMA6r = "0x1c12090f04040f1a201200110d131707050e"
		const addressLN00rw3 = accounts[3]
		const uintQcGYxr = BigInt("1295")
		const uintNZ3AUe = BigInt("707")
		const addressOUC4RAu = accounts[1]
		const addressYttxvqI = accounts[4]
		const uintiXGaUi = await PlasmaswapPairg4Levm3.swap.call(uintNZ3AUe, uintQcGYxr, addressLN00rw3, byteb2IMA6r, {from: accounts[4]});
		const uint112yftz3PP = await PlasmaswapPairg4Levm3.getReserves.call({from: accounts[1]});
		const uintJCMvcg3 = await PlasmaswapPairg4Levm3.burn.call(addressOUC4RAu, {from: accounts[2]});
		const addressJkA57lV = await PlasmaswapPairg4Levm3.skim.call(addressYttxvqI, {from: accounts[0]});
		await PlasmaswapPairg4Levm3.lock.call({from: accounts[0]});

		await expect(PlasmaswapPairg4Levm3.swap.call(uintNZ3AUe, uintQcGYxr, addressLN00rw3, byteb2IMA6r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairatB8eaL = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addresszj8VJ8B = "0x0000000000000000000000000000000000000001"
		const byteOfAJLjL = "0x1d1a021c131513"
		const addressUeAEMRC = accounts[3]
		const uintvVrLVYn = BigInt("1171")
		const uintk5PTVop = BigInt("619")
		const addressfvmxVmI = accounts[0]
		const addressKfVn0hS = accounts[4]
		const byteFy4lH33 = "0x1303011e021f1b0f0d0e091c16030a0f20180d111819090f000a16"
		const addressIBFq8tE = accounts[3]
		const uintM2oub9 = BigInt("1148")
		const uintnu95HEJ = BigInt("1092")
		const bytekkTrqU8 = "0x0d07030e071f1d17021d0909"
		const addressvkdyfcK = accounts[2]
		const uintuom88Hn = BigInt("1631")
		const uintZ8hTA8b = BigInt("73")
		const uintRVqVVv = await PlasmaswapPairatB8eaL.burn.call(addresszj8VJ8B, {from: accounts[0]});
		await PlasmaswapPairatB8eaL.sync.call({from: accounts[0]});
		const uintWTGB1GA = await PlasmaswapPairatB8eaL.swap.call(uintk5PTVop, uintvVrLVYn, addressUeAEMRC, byteOfAJLjL, {from: accounts[5]});
		const addressGixLmTO = await PlasmaswapPairatB8eaL.initialize.call(addressKfVn0hS, addressfvmxVmI, {from: accounts[0]});
		const uint7DOTwQ = await PlasmaswapPairatB8eaL.swap.call(uintnu95HEJ, uintM2oub9, addressIBFq8tE, byteFy4lH33, {from: accounts[0]});
		const uinteVLNxuO = await PlasmaswapPairatB8eaL.swap.call(uintZ8hTA8b, uintuom88Hn, addressvkdyfcK, bytekkTrqU8, {from: accounts[2]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairWRlNppa = await PlasmaswapPair.new({from: accounts[0]});
		const addresszN1qhb = accounts[2]
		const uintTLMGaRH = await PlasmaswapPairWRlNppa.mint.call(addresszN1qhb, {from: accounts[3]});
		await PlasmaswapPairWRlNppa.sync.call({from: accounts[3]});
		await PlasmaswapPairWRlNppa.lock.call({from: accounts[2]});

		await expect(PlasmaswapPairWRlNppa.mint.call(addresszN1qhb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairPCPpdHx = await PlasmaswapPair.new({from: accounts[3]});
		const addressfkkPCi = accounts[0]
		const bytelwv8UWS = "0x1705151c1e1b04101b171c1a1109141c1f1904111b1c060600"
		const addressqEFx4ih = accounts[3]
		const uintnfEB53d = BigInt("784")
		const uintMkxevml = BigInt("1310")
		const addressank59b0 = "0x0000000000000000000000000000000000000001"
		const address5hlKKc = accounts[0]
		const uintkyKnuk9 = await PlasmaswapPairPCPpdHx.burn.call(addressfkkPCi, {from: accounts[1]});
		const uintdy2v5Gx = await PlasmaswapPairPCPpdHx.swap.call(uintMkxevml, uintnfEB53d, addressqEFx4ih, bytelwv8UWS, {from: accounts[1]});
		const uint112xKwhYx = await PlasmaswapPairPCPpdHx.getReserves.call({from: accounts[3]});
		const addressTzJhf7j = await PlasmaswapPairPCPpdHx.skim.call(addressank59b0, {from: accounts[4]});
		const uintxQThf0l = await PlasmaswapPairPCPpdHx.mint.call(address5hlKKc, {from: accounts[3]});

		await expect(PlasmaswapPairPCPpdHx.burn.call(addressfkkPCi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairmegvQPU = await PlasmaswapPair.new({from: accounts[2]});
		const addressp1wl0R5 = accounts[3]
		const uint112HpST9bx = await PlasmaswapPairmegvQPU.getReserves.call({from: accounts[2]});
		await PlasmaswapPairmegvQPU.lock.call({from: accounts[2]});
		const uintif8PenS = await PlasmaswapPairmegvQPU.burn.call(addressp1wl0R5, {from: accounts[0]});

		await expect(PlasmaswapPairmegvQPU.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairYydZpGa = await PlasmaswapPair.new({from: accounts[3]});
		const bytet3e0Pk = "0x091a1f051c131d0219120c1a09"
		const addressAOhP87f = accounts[0]
		const uintXpqpENR = BigInt("1537")
		const uintjCT35Wf = BigInt("1209")
		const byteWAGyF2w = "0x14110f0b1911060408091a10171e14130e1c090319180a0a"
		const addressp1RHe5c = accounts[3]
		const uintpm9AlFG = BigInt("814")
		const uintc2tKRR9 = BigInt("410")
		await PlasmaswapPairYydZpGa.sync.call({from: accounts[0]});
		const uintIBiqe7w = await PlasmaswapPairYydZpGa.swap.call(uintjCT35Wf, uintXpqpENR, addressAOhP87f, bytet3e0Pk, {from: accounts[4]});
		const uintt8VkybP = await PlasmaswapPairYydZpGa.swap.call(uintc2tKRR9, uintpm9AlFG, addressp1RHe5c, byteWAGyF2w, {from: accounts[4]});

		await expect(PlasmaswapPairYydZpGa.sync.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairQrRyfRF = await PlasmaswapPair.new({from: accounts[5]});
		const addressBflz9xO = accounts[4]
		const addressAMpnPrF = accounts[1]
		const addressYRo1sy4 = accounts[3]
		const addressjoVTryt = accounts[0]
		const addresspMu3m17 = "0x0000000000000000000000000000000000000001"
		const addressp9zUZT = await PlasmaswapPairQrRyfRF.initialize.call(addressAMpnPrF, addressBflz9xO, {from: accounts[2]});
		const addressqPC5JpG = await PlasmaswapPairQrRyfRF.initialize.call(addressjoVTryt, addressYRo1sy4, {from: accounts[0]});
		const uintKp2P0p = await PlasmaswapPairQrRyfRF.burn.call(addresspMu3m17, {from: accounts[4]});

		await expect(PlasmaswapPairQrRyfRF.initialize.call(addressAMpnPrF, addressBflz9xO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})