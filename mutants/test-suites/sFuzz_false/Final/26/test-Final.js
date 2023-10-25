const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringUIGp9fi = "fvc"
		const stringaN8aPdi = "a2aSUVuIVH2uHrUv3Am8sAjiFLlB1I4SzOADDVko"
		const uintDJuOUcb = BigInt("59")
		const FinalxzNO7s1 = await Final.new(stringUIGp9fi, stringaN8aPdi, uintDJuOUcb, {from: "0x0000000000000000000000000000000000000001"});
		const uintnPDyL9T = BigInt("227")
		const addressvgqvIB = accounts[4]
		const addressU32WEKu = accounts[1]
		const uintlGsP8Cv = BigInt("64")
		const addressyDS8s82 = accounts[3]
		const addressXKNf7lz = accounts[3]
		const addressRETUdR = accounts[0]
		const addresscbr1PVV = accounts[3]
		const addressUn7BxAC = "0x0000000000000000000000000000000000000001"
		const boolvv9A8JT = await FinalxzNO7s1.transferFrom.call(addressU32WEKu, addressvgqvIB, uintnPDyL9T, {from: accounts[0]});
		const boolpNlfV2l = await FinalxzNO7s1.increaseAllowance.call(addressyDS8s82, uintlGsP8Cv, {from: accounts[2]});
		const uintKbxHLCF = await FinalxzNO7s1.allowance.call(addressRETUdR, addressXKNf7lz, {from: accounts[5]});
		const uint8Dmn2xhV = await FinalxzNO7s1.decimals.call({from: accounts[1]});
		const uinti0fqt6G = await FinalxzNO7s1.allowance.call(addressUn7BxAC, addresscbr1PVV, {from: accounts[3]});
	});

	it('test for Final', async () => {
		const stringH5AmTVp = "7nb5tenYLNByFvVTlrL7IuHvMvgTFk32o3MMdInYqzmOarMj"
		const stringcFsTkfn = "uUB3RrIT2IBatxWM4VMAx5TGdGKnzb69ZMJh5RElRRMLlE8gBkgh601"
		const uintnMsKFkp = BigInt("250")
		const FinaloZZXgHH = await Final.new(stringH5AmTVp, stringcFsTkfn, uintnMsKFkp, {from: accounts[2]});
		const uintqkJM29l = BigInt("1931")
		const addressVEuqJvH = "0x0000000000000000000000000000000000000001"
		const addressUCQ6Vp = "0x0000000000000000000000000000000000000001"
		const uintdxa6S0U = BigInt("966")
		const addressIjSQhAs = accounts[2]
		const stringmOuBbd5 = await FinaloZZXgHH.symbol.call({from: accounts[4]});
//		const boolFDLau0Q = await FinaloZZXgHH.transferFrom.call(addressUCQ6Vp, addressVEuqJvH, uintqkJM29l, {from: accounts[2]});
//		const boolWlSRU4E = await FinaloZZXgHH.approveAndCall.call(addressIjSQhAs, uintdxa6S0U, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringmOuBbd5, "uUB3RrIT2IBatxWM4VMAx5TGdGKnzb69ZMJh5RElRRMLlE8gBkgh601")
		await expect(FinaloZZXgHH.transferFrom.call(addressUCQ6Vp, addressVEuqJvH, uintqkJM29l, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringI04HxYp = "to0iRDcH3cpEtaeyeLn2zme6zyye2nRyaatAqTMs7vamArHh3laUkn6DVzt4xw1aoC43YJwlvCZDz"
		const stringIEujp3u = "Mzs5jGhSQ5hCwpuojAC7tE7E43l69zfFimqTkOhGzfxsv0rthBK8yDzQ65WRY"
		const uintKLWvvTM = BigInt("125")
		const FinalH1UVRTb = await Final.new(stringI04HxYp, stringIEujp3u, uintKLWvvTM, {from: accounts[0]});
		const addresstw0k8sZ = accounts[3]
		const addressPwMtAnY = "0x0000000000000000000000000000000000000001"
		const addressYkHGH1R = accounts[0]
		const uintKljaR18 = BigInt("30")
		const addressQwhD92q = accounts[4]
		const uintuOfbFaz = BigInt("2034")
		const addressBbml5Iv = accounts[0]
		const uintitXBcPO = BigInt("917")
		const addressINC9JMn = accounts[3]
		const uintjzesnY8 = await FinalH1UVRTb.balanceOf.call(addresstw0k8sZ, {from: accounts[3]});
		const uintd767gix = await FinalH1UVRTb.allowance.call(addressYkHGH1R, addressPwMtAnY, {from: accounts[5]});
		const uint8QFFCdfP = await FinalH1UVRTb.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolubc5MuT = await FinalH1UVRTb.transfer.call(addressQwhD92q, uintKljaR18, {from: "0x0000000000000000000000000000000000000001"});
//		const boolMNGh6WX = await FinalH1UVRTb.increaseAllowance.call(addressBbml5Iv, uintuOfbFaz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaaJJ23 = await FinalH1UVRTb.approve.call(addressINC9JMn, uintitXBcPO, {from: accounts[3]});

		assert.equal(uint8QFFCdfP, BigInt("18"))
		assert.equal(uintd767gix, BigInt("0"))
		assert.equal(uintjzesnY8, BigInt("0"))
		await expect(FinalH1UVRTb.transfer.call(addressQwhD92q, uintKljaR18, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringlSiTSew = "WmoGaC1HD7dPHuBqAHXtXofRHCteDJuBhScApeZ4Jn6muzRD6uwJgDSCMOJTBCRDQU5hcee43WCVmMpB1xS"
		const stringIQPRpc7 = "JvKnklGBCmSXqG99kCgXxpHepAfs7s"
		const uintEhgtFaf = BigInt("115")
		const FinalWsW3eY = await Final.new(stringlSiTSew, stringIQPRpc7, uintEhgtFaf, {from: accounts[0]});
		const uintQX6nb8 = BigInt("1552")
		const addressP5LCor4 = accounts[2]
		const uintsYgX7NC = BigInt("910")
		const addressTzvNjyu = accounts[1]
		const uint8LwK55Qb = await FinalWsW3eY.decimals.call({from: accounts[4]});
//		const boolJAaXnM = await FinalWsW3eY.increaseAllowance.call(addressP5LCor4, uintQX6nb8, {from: accounts[3]});
//		const stringjfBDVkG = await FinalWsW3eY.name.call({from: accounts[1]});
//		const boolDTK1Ed1 = await FinalWsW3eY.transfer.call(addressTzvNjyu, uintsYgX7NC, {from: accounts[2]});

		assert.equal(uint8LwK55Qb, BigInt("18"))
		await expect(FinalWsW3eY.increaseAllowance.call(addressP5LCor4, uintQX6nb8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringBmBT0Ae = "ciKQDvxhJGleY9s9fQgtmn6wsSYtkeGurv4tqH3fWC"
		const stringG4XYw5D = "PIaWJH1ByaXqJjNkZCxxyvU7EFsDmgcKpMzTxmDJsXRQbtpbB6U5g2f2Qu7mhtnpnIRelxhz5Tt9BFocuBd3JRFoKeCvpGPCi74"
		const uintjSfIlVI = BigInt("858")
		const FinaltoxgUPk = await Final.new(stringBmBT0Ae, stringG4XYw5D, uintjSfIlVI, {from: accounts[3]});
		const addressZlDk4vM = accounts[2]
		const uintHK1u02 = BigInt("605")
		const addressUNs2Shw = "0x0000000000000000000000000000000000000001"
		const addressHtkldg1 = accounts[5]
		const uinttk7NM6b = BigInt("1750")
		const addressqkcZ6Is = accounts[4]
		const stringNgdVmJT = await FinaltoxgUPk.symbol.call({from: accounts[4]});
//		const booluJsbMSP = await FinaltoxgUPk.transferownership.call(addressZlDk4vM, {from: accounts[1]});
//		const boolKKsxqNi = await FinaltoxgUPk.transferFrom.call(addressHtkldg1, addressUNs2Shw, uintHK1u02, {from: accounts[3]});
//		const boolquJSavV = await FinaltoxgUPk.approve.call(addressqkcZ6Is, uinttk7NM6b, {from: accounts[4]});

		assert.equal(stringNgdVmJT, "PIaWJH1ByaXqJjNkZCxxyvU7EFsDmgcKpMzTxmDJsXRQbtpbB6U5g2f2Qu7mhtnpnIRelxhz5Tt9BFocuBd3JRFoKeCvpGPCi74")
		await expect(FinaltoxgUPk.transferownership.call(addressZlDk4vM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringCDydIaw = "Or7lqleY78XEt5lrRC7303wTFYaH2428vJvzRh3SYp0Z"
		const stringEzc7Dp6 = "tweNas37cd2ZhC6"
		const uintsTv9we2 = BigInt("617")
		const FinalE4c054l = await Final.new(stringCDydIaw, stringEzc7Dp6, uintsTv9we2, {from: accounts[4]});
		const uintRawrdmK = BigInt("1107")
		const addressx4LjGoD = accounts[1]
		const uintD7crYt = BigInt("1715")
		const addressYpVLJ79 = accounts[3]
		const addressJOFWs8Z = accounts[4]
		const uint6qTymA = BigInt("683")
		const addressui0VpKu = accounts[4]
		const boolH2HOGng = await FinalE4c054l.approve.call(addressx4LjGoD, uintRawrdmK, {from: "0x0000000000000000000000000000000000000001"});
		const boole7E3Nua = await FinalE4c054l.transferFrom.call(addressJOFWs8Z, addressYpVLJ79, uintD7crYt, {from: accounts[4]});
		const boolL550nzY = await FinalE4c054l.approve.call(addressui0VpKu, uint6qTymA, {from: accounts[2]});

		assert.equal(boolH2HOGng, true)
		assert.equal(boolL550nzY, true)
		assert.equal(boole7E3Nua, true)
	});

	it('test for Final', async () => {
		const stringI04HxYp = "to0iRDcH3cpEtaeyeLn2zme6zyye2nRyaatAqTMs7vamArHh3laUkn6DVzt4xw1aoC43YJwlvCZDz"
		const stringIEujp3u = "Mzs5jGhSQ5hCwpuojAC7tE7E43l69zfFimqTkOhGzfxsv0rthBK8yDzQ65WRY"
		const uintVD2sxIs = BigInt("125")
		const FinalH1UVRTb = await Final.new(stringI04HxYp, stringIEujp3u, uintVD2sxIs, {from: accounts[0]});
		const addresszNNdK1P = accounts[2]
		const addressoUWxd42 = accounts[1]
		const uintddimQpJ = BigInt("1385")
		const addressgtXiDsC = accounts[4]
		const addressXgH9wJv = "0x0000000000000000000000000000000000000001"
		const addressxpchKzK = accounts[0]
		const uintkQCTsWP = BigInt("30")
		const addressR4P9prH = accounts[4]
		const uintwsTW1R3 = BigInt("2034")
		const addressKeV8grQ = accounts[0]
		const uintxsEF8N8 = BigInt("917")
		const addressbi5weR6 = accounts[3]
		const uintPZS7QnY = await FinalH1UVRTb.allowance.call(addressoUWxd42, addresszNNdK1P, {from: accounts[5]});
//		const boolcg8lMfz = await FinalH1UVRTb.approveAndCall.call(addressgtXiDsC, uintddimQpJ, {from: accounts[1]});
//		const uintd767gix = await FinalH1UVRTb.allowance.call(addressxpchKzK, addressXgH9wJv, {from: accounts[5]});
//		const boolubc5MuT = await FinalH1UVRTb.transfer.call(addressR4P9prH, uintkQCTsWP, {from: "0x0000000000000000000000000000000000000001"});
//		const string6V8uvg = await FinalH1UVRTb.symbol.call({from: accounts[5]});
//		const uint8q9xjN7j = await FinalH1UVRTb.decimals.call({from: accounts[0]});
//		const boolMNGh6WX = await FinalH1UVRTb.increaseAllowance.call(addressKeV8grQ, uintwsTW1R3, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaaJJ23 = await FinalH1UVRTb.approve.call(addressbi5weR6, uintxsEF8N8, {from: accounts[3]});

		assert.equal(uintPZS7QnY, BigInt("0"))
		await expect(FinalH1UVRTb.approveAndCall.call(addressgtXiDsC, uintddimQpJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringI04HxYp = "to0iRDcH3cpEtaeyeLn2zme6zyye2nRyaatAqTMs7vamArHh3laUkn6DVzt4xw1aoC43YJwlvCZDz"
		const stringIEujp3u = "Mzs5jGhSQ5hCwpuojAC7tE7E43l69zfFimqTkOhGzfxsv0rthBK8yDzQ65WRY"
		const uintY3QOZQs = BigInt("125")
		const FinalH1UVRTb = await Final.new(stringI04HxYp, stringIEujp3u, uintY3QOZQs, {from: accounts[0]});
		const uintpGyVdUU = BigInt("0")
		const addressBK7BsVH = accounts[4]
		const boolubc5MuT = await FinalH1UVRTb.transfer.call(addressBK7BsVH, uintpGyVdUU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolubc5MuT, true)
	});

	it('test for Final', async () => {
		const stringI04HxYp = "to0iRDcH3cpEtaeyeLn2zme6zyye2nRyaatAqTMs7vamArHh3laUkn6DVzt4xw1aoC43YJwlvCZDz"
		const stringIEujp3u = "Mzs5jGhSQ5hCwpuojAC7tE7E43l69zfFimqTkOhGzfxsv0rthBK8yDzQ65WRY"
		const uintN0VtTt = BigInt("125")
		const FinalH1UVRTb = await Final.new(stringI04HxYp, stringIEujp3u, uintN0VtTt, {from: accounts[0]});
		const uintBRVsNhZ = BigInt("1963")
		const addresswbBi2Jp = accounts[2]
		const uintXUdESAW = BigInt("12")
		const addressj9sfa04 = accounts[3]
		const boolVfpFjRU = await FinalH1UVRTb.approveAndCall.call(addresswbBi2Jp, uintBRVsNhZ, {from: accounts[0]});
//		const boolubc5MuT = await FinalH1UVRTb.transfer.call(addressj9sfa04, uintXUdESAW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVfpFjRU, true)
		await expect(FinalH1UVRTb.transfer.call(addressj9sfa04, uintXUdESAW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})