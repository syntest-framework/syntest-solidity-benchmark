const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPFktlvR = await LUP.new({from: accounts[3]});
		const uintZfjCEEH = BigInt("766")
		const uintKlZdTmf = BigInt("924")
		const addressThzL1Ts = accounts[0]
		const boolOAJhSFY = false
		const addresstsRSGeI = accounts[0]
		const addressBrFMshs = accounts[3]
		const boolVmrS9NK = false
		const addressqkhwppS = accounts[4]
		const addressWwayXmY = accounts[2]
		const uintY7rUh45 = BigInt("1313")
		const uintY65dH9E = BigInt("736")
		const addresspqGo3Rx = accounts[2]
		const boolZhEDrWb = await LUPFktlvR.lock.call(addressThzL1Ts, uintKlZdTmf, uintZfjCEEH, {from: accounts[4]});
		const booljJrBtya = await LUPFktlvR.freezeAccount.call(addresstsRSGeI, boolOAJhSFY, {from: accounts[5]});
		const addresseNpCBWs = await LUPFktlvR.notFrozen.call(addressBrFMshs, {from: accounts[1]});
		const boolA5uQPft = await LUPFktlvR.freezeAccount.call(addressqkhwppS, boolVmrS9NK, {from: accounts[4]});
		const addressdJpgzUw = await LUPFktlvR.notFrozen.call(addressWwayXmY, {from: accounts[3]});
		const boolZV3wOM = await LUPFktlvR.lock.call(addresspqGo3Rx, uintY65dH9E, uintY7rUh45, {from: accounts[0]});

		await expect(LUPFktlvR.lock.call(addressThzL1Ts, uintKlZdTmf, uintZfjCEEH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringl1DeA2a = "w5TbCoUmXR69cZyDXfnbZTLK1vMlWeTXzwyNvIYO7o9vYfsk5owuKSuzFS8AUx2KQ74TUV9qNia5agAuDnpuOVcWgz4vYu"
		const stringwuuRxFG = "hRtCsCWvAz5DbefE8nWRqXzlCkfl2snOh6Ow6H17xtJqfmLtHgwtT4IA5MuiXv1Z7SG1V5ZzmFN"
		const uintjeJrl1 = BigInt("221")
		const LUPLF75vkE = await LUP.new(stringl1DeA2a, stringwuuRxFG, uintjeJrl1, {from: accounts[0]});
		const uint1fi3K2 = BigInt("1409")
		const addressUmzLOlQ = accounts[2]
		const uintIArFVU9 = BigInt("1625")
		const uintsyxSW7m = BigInt("702")
		const addressmjHimOY = accounts[0]
		const stringf1cHr11 = await LUPLF75vkE.symbol.call({from: accounts[3]});
		const uint8cNjKKjD = await LUPLF75vkE.decimals.call({from: accounts[1]});
		const boolaoNSu0G = await LUPLF75vkE.transfer.call(addressUmzLOlQ, uint1fi3K2, {from: accounts[4]});
		const uint8YEQgOV7 = await LUPLF75vkE.decimals.call({from: accounts[5]});
		const boolGBOD868 = await LUPLF75vkE.transferWithLock.call(addressmjHimOY, uintsyxSW7m, uintIArFVU9, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPqrdyH4b = await LUP.new({from: accounts[4]});
		const addressxaYeOXn = accounts[5]
		const uintGp8FaAz = BigInt("1653")
		const addressH79WJt = accounts[0]
		const uintObj3pZQ = BigInt("119")
		const uintbLzsQSA = BigInt("900")
		const addressXg7FrEF = accounts[0]
		const uintSPFJpKN = BigInt("1962")
		const addressDBR27eu = accounts[0]
		const uintwMx4NN9 = BigInt("1135")
		const uintH1m7cJ8 = BigInt("1353")
		const addressUsueuIt = "0x0000000000000000000000000000000000000001"
		const uint256hypGpFf = await LUPqrdyH4b.balanceOf.call(addressxaYeOXn, {from: accounts[5]});
		const boolyYsiSok = await LUPqrdyH4b.transfer.call(addressH79WJt, uintGp8FaAz, {from: "0x0000000000000000000000000000000000000001"});
		const booliKdZ6H = await LUPqrdyH4b.lock.call(addressXg7FrEF, uintbLzsQSA, uintObj3pZQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolDkBiOv3 = await LUPqrdyH4b.unlock.call(addressDBR27eu, uintSPFJpKN, {from: accounts[4]});
		const boolYbQsB3 = await LUPqrdyH4b.transferWithLock.call(addressUsueuIt, uintH1m7cJ8, uintwMx4NN9, {from: accounts[4]});

		assert.equal(uint256hypGpFf, BigInt("0"))
		await expect(LUPqrdyH4b.transfer.call(addressH79WJt, uintGp8FaAz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPFwUhERS = await LUP.new({from: accounts[4]});
		const uintbpSP8LS = BigInt("1609")
		const addressiOwtIcx = accounts[3]
		const boolntTRUU6 = true
		const addressSFrwEMK = "0x0000000000000000000000000000000000000001"
		const stringjnqAero = await LUPFwUhERS.symbol.call({from: accounts[1]});
		const boolIrWZtkD = await LUPFwUhERS.transfer.call(addressiOwtIcx, uintbpSP8LS, {from: "0x0000000000000000000000000000000000000001"});
		const stringuk5ogUy = await LUPFwUhERS.symbol.call({from: accounts[1]});
		const boolnIODaar = await LUPFwUhERS.freezeAccount.call(addressSFrwEMK, boolntTRUU6, {from: accounts[1]});

		assert.equal(stringjnqAero, "LUP")
		await expect(LUPFwUhERS.transfer.call(addressiOwtIcx, uintbpSP8LS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPDu9dxNr = await LUP.new({from: accounts[4]});
		const boolWA3vewd = true
		const addressRw5xDWv = accounts[3]
		const addressHCHHbYa = accounts[4]
		const boolDDAY6S1 = await LUPDu9dxNr.freezeAccount.call(addressRw5xDWv, boolWA3vewd, {from: accounts[4]});
		const uint256lWXxlAP = await LUPDu9dxNr.balanceOf.call(addressHCHHbYa, {from: accounts[2]});

		assert.equal(boolDDAY6S1, true)
		assert.equal(uint256lWXxlAP, BigInt("50000000000000000000000000"))
	});

	it('test for LUP', async () => {
		const LUPqrdyH4b = await LUP.new({from: accounts[4]});
		const addressUYmv7r = accounts[6]
		const uintAWxPpCx = BigInt("1653")
		const addresse5K0jgJ = accounts[0]
		const uintDfor1D = BigInt("119")
		const uintjHVPsN = BigInt("900")
		const addressWN3ulHi = accounts[0]
		const uintmkg0VR = BigInt("1962")
		const addresspGUIUXc = accounts[0]
		const uintnjs9O5Z = BigInt("1135")
		const uintlUH2cr7 = BigInt("1353")
		const addressLe7uyi = "0x0000000000000000000000000000000000000001"
		const uint256hypGpFf = await LUPqrdyH4b.balanceOf.call(addressUYmv7r, {from: accounts[5]});
		const uint8pmJbQbR = await LUPqrdyH4b.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolyYsiSok = await LUPqrdyH4b.transfer.call(addresse5K0jgJ, uintAWxPpCx, {from: "0x0000000000000000000000000000000000000001"});
		const booliKdZ6H = await LUPqrdyH4b.lock.call(addressWN3ulHi, uintjHVPsN, uintDfor1D, {from: "0x0000000000000000000000000000000000000001"});
		const boolDkBiOv3 = await LUPqrdyH4b.unlock.call(addresspGUIUXc, uintmkg0VR, {from: accounts[4]});
		const boolYbQsB3 = await LUPqrdyH4b.transferWithLock.call(addressLe7uyi, uintlUH2cr7, uintnjs9O5Z, {from: accounts[4]});

		assert.equal(uint256hypGpFf, BigInt("0"))
		assert.equal(uint8pmJbQbR, BigInt("18"))
		await expect(LUPqrdyH4b.transfer.call(addresse5K0jgJ, uintAWxPpCx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPDu9dxNr = await LUP.new({from: accounts[4]});
		const boolWA3vewd = true
		const addressPSuErT = accounts[4]
		const addressYYRxGDb = accounts[2]
		const addressZTpf1ae = accounts[4]
		const uint8Remn1uU = await LUPDu9dxNr.decimals.call({from: accounts[0]});
		const boolDDAY6S1 = await LUPDu9dxNr.freezeAccount.call(addressPSuErT, boolWA3vewd, {from: accounts[4]});
		const addressO1VUeo = await LUPDu9dxNr.upgradeTo.call(addressYYRxGDb, {from: accounts[1]});
		const uint256lWXxlAP = await LUPDu9dxNr.balanceOf.call(addressZTpf1ae, {from: accounts[2]});

		assert.equal(boolDDAY6S1, true)
		assert.equal(uint8Remn1uU, BigInt("18"))
		await expect(LUPDu9dxNr.upgradeTo.call(addressYYRxGDb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPDu9dxNr = await LUP.new({from: accounts[4]});
		const uinttuOA43H = BigInt("1168")
		const addressNOrMNVo = accounts[5]
		const addresskbtB7Ma = accounts[4]
		const stringqhNXiNN = await LUPDu9dxNr.name.call({from: accounts[0]});
		const boolGrmKviR = await LUPDu9dxNr.unlock.call(addressNOrMNVo, uinttuOA43H, {from: accounts[3]});
		const uint256lWXxlAP = await LUPDu9dxNr.balanceOf.call(addresskbtB7Ma, {from: accounts[2]});

		assert.equal(stringqhNXiNN, "LINKUP Token")
		await expect(LUPDu9dxNr.unlock.call(addressNOrMNVo, uinttuOA43H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqrdyH4b = await LUP.new({from: accounts[4]});
		const address52ejXT = accounts[5]
		const addressvXh3kfT = accounts[5]
		const uintWwdrx8I = BigInt("1653")
		const addressJOX9rZV = accounts[1]
		const uintZIHIzyP = BigInt("119")
		const uintnnYv5P = BigInt("900")
		const addressAQ9OBzY = accounts[0]
		const uinthrzHPie = BigInt("1962")
		const addressSKSxTGB = accounts[0]
		const uintk4X2pDR = BigInt("1135")
		const uintcrgsDka = BigInt("1353")
		const addressdPhqkaJ = "0x0000000000000000000000000000000000000001"
		const uint256hypGpFf = await LUPqrdyH4b.balanceOf.call(address52ejXT, {from: accounts[5]});
		const addressVX86tj = await LUPqrdyH4b.notFrozen.call(addressvXh3kfT, {from: accounts[0]});
		const boolyYsiSok = await LUPqrdyH4b.transfer.call(addressJOX9rZV, uintWwdrx8I, {from: "0x0000000000000000000000000000000000000001"});
		const booliKdZ6H = await LUPqrdyH4b.lock.call(addressAQ9OBzY, uintnnYv5P, uintZIHIzyP, {from: "0x0000000000000000000000000000000000000001"});
		const boolDkBiOv3 = await LUPqrdyH4b.unlock.call(addressSKSxTGB, uinthrzHPie, {from: accounts[4]});
		const boolYbQsB3 = await LUPqrdyH4b.transferWithLock.call(addressdPhqkaJ, uintcrgsDka, uintk4X2pDR, {from: accounts[4]});

		assert.equal(uint256hypGpFf, BigInt("0"))
		await expect(LUPqrdyH4b.notFrozen.call(addressvXh3kfT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqrdyH4b = await LUP.new({from: accounts[4]});
		const addressvqt32gU = accounts[6]
		const uintRMavhoW = BigInt("1135")
		const uint6xrkSL = BigInt("1353")
		const addresscv1kWf = "0x0000000000000000000000000000000000000001"
		const uint256hypGpFf = await LUPqrdyH4b.balanceOf.call(addressvqt32gU, {from: accounts[5]});
		const boolYbQsB3 = await LUPqrdyH4b.transferWithLock.call(addresscv1kWf, uint6xrkSL, uintRMavhoW, {from: accounts[4]});

		assert.equal(boolYbQsB3, true)
		assert.equal(uint256hypGpFf, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPqrdyH4b = await LUP.new({from: accounts[4]});
		const addressXGpaZSi = accounts[5]
		const uintDk2iUDR = BigInt("1285")
		const addressDnAoiRp = accounts[1]
		const uintnp6wDJO = BigInt("119")
		const uintiHOseJ = BigInt("900")
		const addressfbHkPau = accounts[0]
		const uintSn880Kp = BigInt("1962")
		const addressKxtvfCs = accounts[1]
		const uintYtpzeNx = BigInt("1135")
		const uintGkUWEua = BigInt("1353")
		const addressAxkwxqV = "0x0000000000000000000000000000000000000001"
		const uint256hypGpFf = await LUPqrdyH4b.balanceOf.call(addressXGpaZSi, {from: accounts[5]});
		const stringoLI8yFW = await LUPqrdyH4b.symbol.call({from: accounts[1]});
		const boolvorCsX = await LUPqrdyH4b.unlock.call(addressDnAoiRp, uintDk2iUDR, {from: accounts[4]});
		const booliKdZ6H = await LUPqrdyH4b.lock.call(addressfbHkPau, uintiHOseJ, uintnp6wDJO, {from: "0x0000000000000000000000000000000000000001"});
		const boolDkBiOv3 = await LUPqrdyH4b.unlock.call(addressKxtvfCs, uintSn880Kp, {from: accounts[4]});
		const boolYbQsB3 = await LUPqrdyH4b.transferWithLock.call(addressAxkwxqV, uintGkUWEua, uintYtpzeNx, {from: accounts[4]});

		assert.equal(stringoLI8yFW, "LUP")
		assert.equal(uint256hypGpFf, BigInt("0"))
		await expect(LUPqrdyH4b.unlock.call(addressDnAoiRp, uintDk2iUDR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPDu9dxNr = await LUP.new({from: accounts[4]});
		const addressPelryk = accounts[5]
		const addressHn4EEnp = accounts[1]
		const uint256lWXxlAP = await LUPDu9dxNr.balanceOf.call(addressPelryk, {from: accounts[2]});
		const addressc0ibnpG = await LUPDu9dxNr.upgradeTo.call(addressHn4EEnp, {from: accounts[4]});
		const uint8q8Fcjx = await LUPDu9dxNr.decimals.call({from: accounts[4]});

		assert.equal(uint256lWXxlAP, BigInt("0"))
		assert.equal(uint8q8Fcjx, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPqrdyH4b = await LUP.new({from: accounts[4]});
		const addresszAMjpyh = accounts[5]
		const uintZn8s54A = BigInt("58")
		const uintg9m4cLe = BigInt("1096")
		const addresshoc0U20 = accounts[3]
		const uintt8x42Nc = BigInt("1252")
		const addressZdatyxe = accounts[1]
		const uintrGV2JhM = BigInt("119")
		const uintCZ6BssR = BigInt("900")
		const addressjA1x573 = accounts[0]
		const uintFElyh5d = BigInt("1965")
		const addressYPWwzhP = accounts[1]
		const uintyQHmVsP = BigInt("1135")
		const uintHR4FfKu = BigInt("1353")
		const addressv3tsnzd = "0x0000000000000000000000000000000000000001"
		const uint256hypGpFf = await LUPqrdyH4b.balanceOf.call(addresszAMjpyh, {from: accounts[5]});
		const stringoLI8yFW = await LUPqrdyH4b.symbol.call({from: accounts[1]});
		const boolhUpyHz4 = await LUPqrdyH4b.lock.call(addresshoc0U20, uintg9m4cLe, uintZn8s54A, {from: accounts[4]});
		const uint83Trs4d = await LUPqrdyH4b.decimals.call({from: accounts[2]});
		const boolvorCsX = await LUPqrdyH4b.unlock.call(addressZdatyxe, uintt8x42Nc, {from: accounts[4]});
		const booliKdZ6H = await LUPqrdyH4b.lock.call(addressjA1x573, uintCZ6BssR, uintrGV2JhM, {from: "0x0000000000000000000000000000000000000001"});
		const boolDkBiOv3 = await LUPqrdyH4b.unlock.call(addressYPWwzhP, uintFElyh5d, {from: accounts[4]});
		const boolYbQsB3 = await LUPqrdyH4b.transferWithLock.call(addressv3tsnzd, uintHR4FfKu, uintyQHmVsP, {from: accounts[4]});

		assert.equal(stringoLI8yFW, "LUP")
		assert.equal(uint256hypGpFf, BigInt("0"))
		await expect(LUPqrdyH4b.lock.call(addresshoc0U20, uintg9m4cLe, uintZn8s54A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqrdyH4b = await LUP.new({from: accounts[4]});
		const addressJZyN5BC = accounts[5]
		const uintoZ3gfYU = BigInt("58")
		const uintA9rJIri = BigInt("1096")
		const addressqAU9brs = accounts[4]
		const stringivN37qW = await LUPqrdyH4b.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256hypGpFf = await LUPqrdyH4b.balanceOf.call(addressJZyN5BC, {from: accounts[5]});
		const boolhUpyHz4 = await LUPqrdyH4b.lock.call(addressqAU9brs, uintA9rJIri, uintoZ3gfYU, {from: accounts[4]});

		assert.equal(boolhUpyHz4, true)
		assert.equal(stringivN37qW, "LUP")
		assert.equal(uint256hypGpFf, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPtmQqska = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintr23Kk7b = BigInt("1097")
		const addressIrKj47 = accounts[2]
		const boolVAm8Nt5 = false
		const addressxKTQngC = accounts[1]
		const addressOUtjNQ = accounts[3]
		const addressIC4L2BQ = accounts[2]
		const addressiBNtW74 = accounts[5]
		const boolCwR0qiF = await LUPtmQqska.unlock.call(addressIrKj47, uintr23Kk7b, {from: accounts[1]});
		const boolHJ2hu5A = await LUPtmQqska.freezeAccount.call(addressxKTQngC, boolVAm8Nt5, {from: accounts[1]});
		const addressmrTf11I = await LUPtmQqska.upgradeTo.call(addressOUtjNQ, {from: accounts[4]});
		const addressP08gclH = await LUPtmQqska.notFrozen.call(addressIC4L2BQ, {from: accounts[4]});
		const addressVRYgjVe = await LUPtmQqska.notFrozen.call(addressiBNtW74, {from: accounts[1]});
	});
})