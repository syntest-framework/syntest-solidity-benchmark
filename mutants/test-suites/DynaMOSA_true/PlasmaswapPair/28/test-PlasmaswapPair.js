const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairssqySOA = await PlasmaswapPair.new({from: accounts[4]});
		const addressxiC2TpR = "0x0000000000000000000000000000000000000001"
		const addressLHh11g = accounts[0]
		const bytec6NC9nI = "0x041b1b160b09200e02110a0a1b011710190c03131c141c0d0e080705"
		const addressc0F1UFp = accounts[5]
		const uintEUvz37x = BigInt("1865")
		const uintmOljTO8 = BigInt("708")
		const addresskq6XMlu = accounts[1]
		const addressByMAQT0 = accounts[2]
		const byteYgaEMxu = "0x14141c2011051e0618051a1b"
		const addressoyMs7yD = accounts[2]
		const uintyKXJiC5 = BigInt("166")
		const uintQKx7YgH = BigInt("1709")
		const byteQ58GZXU = "0x040c1a091e1c1d1b1005011d151b1f0c0f0914112015"
		const addressEmumIAa = accounts[5]
		const uintvfM8cqL = BigInt("537")
		const uintzn88KMO = BigInt("342")
//		const addressF36Hti = await PlasmaswapPairssqySOA.initialize.call(addressLHh11g, addressxiC2TpR, {from: accounts[3]});
//		await PlasmaswapPairssqySOA.sync.call({from: accounts[3]});
//		const uintfDvl2Pi = await PlasmaswapPairssqySOA.swap.call(uintmOljTO8, uintEUvz37x, addressc0F1UFp, bytec6NC9nI, {from: "0x0000000000000000000000000000000000000001"});
//		const addressTB2nlHG = await PlasmaswapPairssqySOA.initialize.call(addressByMAQT0, addresskq6XMlu, {from: accounts[3]});
//		const uintjsLlg9y = await PlasmaswapPairssqySOA.swap.call(uintQKx7YgH, uintyKXJiC5, addressoyMs7yD, byteYgaEMxu, {from: accounts[2]});
//		const uintjdINrTY = await PlasmaswapPairssqySOA.swap.call(uintzn88KMO, uintvfM8cqL, addressEmumIAa, byteQ58GZXU, {from: accounts[1]});

		await expect(PlasmaswapPairssqySOA.initialize.call(addressLHh11g, addressxiC2TpR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairswMP7Eh = await PlasmaswapPair.new({from: accounts[3]});
		const bytefIt2mUA = "0x1e0a06031e191a06071e05091e101b1d100c17050604"
		const addressTPdOVS = accounts[0]
		const uinthoPIScl = BigInt("807")
		const uint8ur6Hf = BigInt("1350")
		const addressFEmr1H = accounts[2]
		const addresslfwSzy = accounts[0]
		const byteHjpj0Vm = "0x021417101e1d041013041c051019050318191d071f04"
		const addresszVmA5wA = "0x0000000000000000000000000000000000000001"
		const uintjcnFit3 = BigInt("990")
		const uintbas0g6S = BigInt("75")
//		await PlasmaswapPairswMP7Eh.sync.call({from: accounts[1]});
//		const uintbXysom6 = await PlasmaswapPairswMP7Eh.swap.call(uint8ur6Hf, uinthoPIScl, addressTPdOVS, bytefIt2mUA, {from: accounts[0]});
//		const uint112SwXHfI = await PlasmaswapPairswMP7Eh.getReserves.call({from: accounts[4]});
//		const addressXxsZGV3 = await PlasmaswapPairswMP7Eh.initialize.call(addresslfwSzy, addressFEmr1H, {from: accounts[1]});
//		const uintIbDH7tK = await PlasmaswapPairswMP7Eh.swap.call(uintbas0g6S, uintjcnFit3, addresszVmA5wA, byteHjpj0Vm, {from: accounts[5]});

		await expect(PlasmaswapPairswMP7Eh.sync.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairsFph5s7 = await PlasmaswapPair.new({from: accounts[4]});
		const addressqWhx2gJ = accounts[2]
		const addressE1hxRCR = accounts[4]
		const addressIIwe47i = accounts[3]
		const addressHxTupp3 = accounts[4]
		const addressWWKWRrq = accounts[4]
		const addressJdYMb9Z = await PlasmaswapPairsFph5s7.initialize.call(addressE1hxRCR, addressqWhx2gJ, {from: accounts[4]});
//		const uintog4Uox9 = await PlasmaswapPairsFph5s7.mint.call(addressIIwe47i, {from: accounts[1]});
//		const uintAd2jtq = await PlasmaswapPairsFph5s7.mint.call(addressHxTupp3, {from: accounts[2]});
//		const addressqzpkkZ = await PlasmaswapPairsFph5s7.skim.call(addressWWKWRrq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairsFph5s7.mint.call(addressIIwe47i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairFtRvHgu = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const byteml5DyG4 = "0x011f1203001702121705100919101b1d0518"
		const addressrhRRuJq = accounts[0]
		const uintXAQiZIz = BigInt("88")
		const uintCLac7K8 = BigInt("1818")
		const byteDEfUn60 = "0x14120d0c0900051d"
		const addressDTXjm0K = accounts[3]
		const uintvF1X9f7 = BigInt("1553")
		const uintqhdhLJb = BigInt("1262")
		const uintmF1g6Fo = await PlasmaswapPairFtRvHgu.swap.call(uintCLac7K8, uintXAQiZIz, addressrhRRuJq, byteml5DyG4, {from: accounts[0]});
		const uintTXypGi2 = await PlasmaswapPairFtRvHgu.swap.call(uintqhdhLJb, uintvF1X9f7, addressDTXjm0K, byteDEfUn60, {from: accounts[1]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJoMW2K = await PlasmaswapPair.new({from: accounts[1]});
		const addressVUpQUYc = "0x0000000000000000000000000000000000000001"
		const addressQAeiJG = accounts[2]
//		await PlasmaswapPairJoMW2K.lock.call({from: accounts[2]});
//		const uintQNQXQ6e = await PlasmaswapPairJoMW2K.burn.call(addressVUpQUYc, {from: accounts[2]});
//		const addressoMHtEGk = await PlasmaswapPairJoMW2K.skim.call(addressQAeiJG, {from: accounts[1]});

		await expect(PlasmaswapPairJoMW2K.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaircKalVhl = await PlasmaswapPair.new({from: accounts[2]});
		const bytezbB1pQ8 = "0x0a0917060a071b1705080e1c071c151b05"
		const addressbRNU3d = accounts[3]
		const uintHxIp5nY = BigInt("1796")
		const uintSlNbNm5 = BigInt("63")
		const addressT288B4 = accounts[3]
		const addresszviGRpF = accounts[1]
		const byteiJvPhG4 = "0x0700091915161d09090f16"
		const addressRUOpgO8 = "0x0000000000000000000000000000000000000001"
		const uintCTLwIx = BigInt("1792")
		const uintAHvre8S = BigInt("996")
		const byteLOytNB = "0x0f0f091d1216171c1e1b021d1c0a1119"
		const addressNAyrYMK = accounts[1]
		const uintFtB2OWL = BigInt("696")
		const uintRQhC5cr = BigInt("501")
//		const uintpIxvuTF = await PlasmaswapPaircKalVhl.swap.call(uintSlNbNm5, uintHxIp5nY, addressbRNU3d, bytezbB1pQ8, {from: accounts[3]});
//		const uint112fpHAfLL = await PlasmaswapPaircKalVhl.getReserves.call({from: accounts[3]});
//		const uintPUecNwc = await PlasmaswapPaircKalVhl.burn.call(addressT288B4, {from: accounts[5]});
//		const addressm0k7j8R = await PlasmaswapPaircKalVhl.skim.call(addresszviGRpF, {from: accounts[4]});
//		const uintgMlLeui = await PlasmaswapPaircKalVhl.swap.call(uintAHvre8S, uintCTLwIx, addressRUOpgO8, byteiJvPhG4, {from: accounts[2]});
//		const uintxRxxAir = await PlasmaswapPaircKalVhl.swap.call(uintRQhC5cr, uintFtB2OWL, addressNAyrYMK, byteLOytNB, {from: accounts[5]});

		await expect(PlasmaswapPaircKalVhl.swap.call(uintSlNbNm5, uintHxIp5nY, addressbRNU3d, bytezbB1pQ8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairaqSjSbU = await PlasmaswapPair.new({from: accounts[3]});
		const addressFskV936 = accounts[2]
		const addressvQvIf3W = accounts[1]
//		const uintPzR5JtQ = await PlasmaswapPairaqSjSbU.burn.call(addressFskV936, {from: accounts[3]});
//		const uint112WuaDXr = await PlasmaswapPairaqSjSbU.getReserves.call({from: accounts[5]});
//		const uintQ5TBkI8 = await PlasmaswapPairaqSjSbU.burn.call(addressvQvIf3W, {from: accounts[2]});

		await expect(PlasmaswapPairaqSjSbU.burn.call(addressFskV936, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairqCayukT = await PlasmaswapPair.new({from: accounts[4]});
		const addressYHq7Icg = accounts[2]
		const addressuBZbLEG = accounts[1]
		const addressK0yhOCx = accounts[2]
		const byteJ3FewGK = "0x1f19171f021e1c151c020b0518"
		const addressDGQ14Np = accounts[1]
		const uintjLM7pRo = BigInt("312")
		const uint3mfrmU = BigInt("1734")
		const addressoaOug5i = accounts[4]
		const addresseWI6VEW = "0x0000000000000000000000000000000000000001"
//		const addresszrTQHFy = await PlasmaswapPairqCayukT.skim.call(addressYHq7Icg, {from: accounts[4]});
//		const addressDYxa83P = await PlasmaswapPairqCayukT.initialize.call(addressK0yhOCx, addressuBZbLEG, {from: accounts[1]});
//		const uint112hOphMj = await PlasmaswapPairqCayukT.getReserves.call({from: accounts[3]});
//		const uintzKCQVBj = await PlasmaswapPairqCayukT.swap.call(uint3mfrmU, uintjLM7pRo, addressDGQ14Np, byteJ3FewGK, {from: accounts[5]});
//		const uintp5YRDii = await PlasmaswapPairqCayukT.mint.call(addressoaOug5i, {from: accounts[4]});
//		const addresslp2d0T5 = await PlasmaswapPairqCayukT.skim.call(addresseWI6VEW, {from: accounts[0]});

		await expect(PlasmaswapPairqCayukT.skim.call(addressYHq7Icg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})