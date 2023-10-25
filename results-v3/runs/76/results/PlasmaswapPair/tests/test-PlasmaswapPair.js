const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairfFVbnVl = await PlasmaswapPair.new({from: accounts[2]});
		const bytedv6q5Hd = "0x0e1d071618121f0b1616060608030a100f081103"
		const addressu2U2cuL = accounts[3]
		const uintEiedAVZ = BigInt("1770")
		const uinthdXL09Z = BigInt("348")
		const uintfaJjiz3 = await PlasmaswapPairfFVbnVl.swap.call(uinthdXL09Z, uintEiedAVZ, addressu2U2cuL, bytedv6q5Hd, {from: accounts[1]});
		const uint112gckCma0 = await PlasmaswapPairfFVbnVl.getReserves.call({from: accounts[1]});

		await expect(PlasmaswapPairfFVbnVl.swap.call(uinthdXL09Z, uintEiedAVZ, addressu2U2cuL, bytedv6q5Hd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairrgGPl3p = await PlasmaswapPair.new({from: accounts[2]});
		const addressIWZffvF = accounts[4]
		const addressyUkoO28 = accounts[2]
		const addressG3bVdSf = await PlasmaswapPairrgGPl3p.skim.call(addressIWZffvF, {from: accounts[3]});
		const addressFT823OU = await PlasmaswapPairrgGPl3p.skim.call(addressyUkoO28, {from: accounts[1]});

		await expect(PlasmaswapPairrgGPl3p.skim.call(addressIWZffvF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairdIMOCkD = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrJ0Lmao = accounts[2]
		const addressA6izqT7 = accounts[4]
		await PlasmaswapPairdIMOCkD.lock.call({from: accounts[0]});
		const addressn3zcHkN = await PlasmaswapPairdIMOCkD.skim.call(addressrJ0Lmao, {from: accounts[5]});
		const uintQF7blWo = await PlasmaswapPairdIMOCkD.burn.call(addressA6izqT7, {from: accounts[3]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairgjYZmb = await PlasmaswapPair.new({from: accounts[5]});
		const addressCkRIXic = accounts[1]
		const byteFlF1AgY = "0x04050510011812140b03030c"
		const addressP3ZLTpE = accounts[0]
		const uinty3RPAEo = BigInt("1312")
		const uintcxm25Ws = BigInt("653")
		const uint112MyGNLlm = await PlasmaswapPairgjYZmb.getReserves.call({from: accounts[5]});
		const uintsgzgZHH = await PlasmaswapPairgjYZmb.mint.call(addressCkRIXic, {from: accounts[2]});
		const uint112RNMnhgl = await PlasmaswapPairgjYZmb.getReserves.call({from: accounts[2]});
		const uinth0SpJS5 = await PlasmaswapPairgjYZmb.swap.call(uintcxm25Ws, uinty3RPAEo, addressP3ZLTpE, byteFlF1AgY, {from: accounts[3]});

		await expect(PlasmaswapPairgjYZmb.mint.call(addressCkRIXic, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair5fo7Z0 = await PlasmaswapPair.new({from: accounts[4]});
		const addressMzidsQL = accounts[2]
		const bytebsumM2f = "0x09021c"
		const addressbIKkVz3 = "0x0000000000000000000000000000000000000001"
		const uintZNQs5G = BigInt("283")
		const uintP0MVMQ5 = BigInt("705")
		const uint112W1ds6DX = await PlasmaswapPair5fo7Z0.getReserves.call({from: accounts[4]});
		const uint112euR3GY = await PlasmaswapPair5fo7Z0.getReserves.call({from: accounts[0]});
		const uint112takkueU = await PlasmaswapPair5fo7Z0.getReserves.call({from: accounts[5]});
		const uintN0uGMLV = await PlasmaswapPair5fo7Z0.burn.call(addressMzidsQL, {from: accounts[1]});
		const uintfS7PlgM = await PlasmaswapPair5fo7Z0.swap.call(uintP0MVMQ5, uintZNQs5G, addressbIKkVz3, bytebsumM2f, {from: accounts[3]});

		await expect(PlasmaswapPair5fo7Z0.burn.call(addressMzidsQL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairKr5XMyh = await PlasmaswapPair.new({from: accounts[3]});
		const addressTyXN5r1 = accounts[4]
		const byteedpQ4lk = "0x1808"
		const addressrkX5WN = accounts[3]
		const uint3adOSP = BigInt("1957")
		const uintw6xRi3b = BigInt("1285")
		const addresspHPFzB = accounts[3]
		const addresspaGNeaw = "0x0000000000000000000000000000000000000001"
		const addressvxzYjCv = accounts[4]
		await PlasmaswapPairKr5XMyh.lock.call({from: accounts[1]});
		const uintrfbLUJD = await PlasmaswapPairKr5XMyh.mint.call(addressTyXN5r1, {from: accounts[1]});
		const uintZEaiAAF = await PlasmaswapPairKr5XMyh.swap.call(uintw6xRi3b, uint3adOSP, addressrkX5WN, byteedpQ4lk, {from: accounts[2]});
		const addressUXtzlw5 = await PlasmaswapPairKr5XMyh.initialize.call(addresspaGNeaw, addresspHPFzB, {from: accounts[3]});
		const uintLSTY5V = await PlasmaswapPairKr5XMyh.burn.call(addressvxzYjCv, {from: accounts[1]});

		await expect(PlasmaswapPairKr5XMyh.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair5fo7Z0 = await PlasmaswapPair.new({from: accounts[4]});
		const addressnXrjHvR = accounts[0]
		const addressUE56Mkc = accounts[2]
		const byteJpzRbRh = "0x09021c"
		const addressoKPGhtd = "0x0000000000000000000000000000000000000001"
		const uinttyfLX7Y = BigInt("283")
		const uintqE1Ku2x = BigInt("705")
		const uint112W1ds6DX = await PlasmaswapPair5fo7Z0.getReserves.call({from: accounts[4]});
		await PlasmaswapPair5fo7Z0.sync.call({from: accounts[0]});
		const uintr0LZuZi = await PlasmaswapPair5fo7Z0.mint.call(addressnXrjHvR, {from: "0x0000000000000000000000000000000000000001"});
		const uint112euR3GY = await PlasmaswapPair5fo7Z0.getReserves.call({from: accounts[0]});
		const uintN0uGMLV = await PlasmaswapPair5fo7Z0.burn.call(addressUE56Mkc, {from: accounts[1]});
		const uintfS7PlgM = await PlasmaswapPair5fo7Z0.swap.call(uintqE1Ku2x, uinttyfLX7Y, addressoKPGhtd, byteJpzRbRh, {from: accounts[3]});

		await expect(PlasmaswapPair5fo7Z0.sync.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairgjYZmb = await PlasmaswapPair.new({from: accounts[5]});
		const addressIMaj3Op = accounts[3]
		const addresskKnstEN = "0x0000000000000000000000000000000000000001"
		const addressDTx2tOc = accounts[3]
		const bytep9cOCkh = "0x04050510011812140b03030c"
		const addressTFLUdHX = accounts[0]
		const uintFniXSy = BigInt("1312")
		const uintCTVja4c = BigInt("653")
		const addressXWH569X = await PlasmaswapPairgjYZmb.initialize.call(addresskKnstEN, addressIMaj3Op, {from: accounts[0]});
		const uintsgzgZHH = await PlasmaswapPairgjYZmb.mint.call(addressDTx2tOc, {from: accounts[2]});
		const uinth0SpJS5 = await PlasmaswapPairgjYZmb.swap.call(uintCTVja4c, uintFniXSy, addressTFLUdHX, bytep9cOCkh, {from: accounts[3]});

		await expect(PlasmaswapPairgjYZmb.initialize.call(addresskKnstEN, addressIMaj3Op, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairF5Vx4hG = await PlasmaswapPair.new({from: accounts[4]});
		const addressqr1p3zf = accounts[2]
		const addresstcR7HIb = "0x0000000000000000000000000000000000000001"
		const addressEcW9XKP = accounts[0]
		const bytehftQdpP = "0x0a140f0e191c0c001e0f0f120d1a080e040d07"
		const addressfqesJpV = accounts[1]
		const uintsyAnFPh = BigInt("366")
		const uintxqkdOVt = BigInt("377")
		const addressfQNYEPF = await PlasmaswapPairF5Vx4hG.initialize.call(addresstcR7HIb, addressqr1p3zf, {from: accounts[4]});
		const uintghVhV29 = await PlasmaswapPairF5Vx4hG.burn.call(addressEcW9XKP, {from: accounts[3]});
		const uint112au9Usl = await PlasmaswapPairF5Vx4hG.getReserves.call({from: accounts[0]});
		const uintdQhrQY4 = await PlasmaswapPairF5Vx4hG.swap.call(uintxqkdOVt, uintsyAnFPh, addressfqesJpV, bytehftQdpP, {from: accounts[5]});

		await expect(PlasmaswapPairF5Vx4hG.burn.call(addressEcW9XKP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})