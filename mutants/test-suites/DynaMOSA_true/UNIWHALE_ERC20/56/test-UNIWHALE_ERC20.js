const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20sqkTCx = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintVzbArun = BigInt("1229")
		const uintTl7ejEP = BigInt("402")
		const uintendNHTk = BigInt("1001")
		const uintd7H3hU = BigInt("1633")
		const addressbJqrdML = accounts[4]
		const uintGc4TMzY = BigInt("262")
		const uintgHBaGaj = BigInt("684")
		const uintAyG8Kkl = BigInt("1820")
		const uintkDFuprP = BigInt("1300")
		const uintL26seGi = BigInt("1961")
//		const uint256kFDWPS = await UNIWHALE_ERC20sqkTCx.startAirdrop.call(uintd7H3hU, uintendNHTk, uintTl7ejEP, uintVzbArun, {from: accounts[1]});
//		const boolgpUvkvI = await UNIWHALE_ERC20sqkTCx.tokenSale.call(addressbJqrdML, {from: accounts[2]});
//		const uint256a66r1K9 = await UNIWHALE_ERC20sqkTCx.startSale.call(uintL26seGi, uintkDFuprP, uintAyG8Kkl, uintgHBaGaj, uintGc4TMzY, {from: accounts[1]});

		await expect(UNIWHALE_ERC20sqkTCx.startAirdrop.call(uintd7H3hU, uintendNHTk, uintTl7ejEP, uintVzbArun, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NTYWLLq = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressnV4aLan = accounts[1]
		const uintw9sI24v = BigInt("1070")
		const uintA07ocsM = BigInt("173")
		const uintzWC8weV = BigInt("1000")
		const uintmqJk7TW = BigInt("1798")
		const uintkMEc0uw = BigInt("697")
//		const boolIJhsFwX = await UNIWHALE_ERC20NTYWLLq.getAirdrop.call(addressnV4aLan, {from: accounts[2]});
//		const uint256WLLhFhr = await UNIWHALE_ERC20NTYWLLq.startSale.call(uintkMEc0uw, uintmqJk7TW, uintzWC8weV, uintA07ocsM, uintw9sI24v, {from: accounts[3]});

		await expect(UNIWHALE_ERC20NTYWLLq.getAirdrop.call(addressnV4aLan, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20t62JDFL = await UNIWHALE_ERC20.new({from: accounts[5]});
		const addressxAIUZQ1 = accounts[5]
		const uint256cYAzkPJ = await UNIWHALE_ERC20t62JDFL.viewSale.call({from: accounts[1]});
//		const booliHAButT = await UNIWHALE_ERC20t62JDFL.tokenSale.call(addressxAIUZQ1, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zPVCrRy = await UNIWHALE_ERC20t62JDFL.viewSale.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20t62JDFL.tokenSale.call(addressxAIUZQ1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC202sP2mA = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addressHwU2R4B = accounts[4]
		const addressAGWuXCm = accounts[5]
		const uint256U5fNz0 = await UNIWHALE_ERC202sP2mA.viewAirdrop.call({from: accounts[3]});
//		const boolx3zI1y = await UNIWHALE_ERC202sP2mA.getAirdrop.call(addressHwU2R4B, {from: accounts[2]});
//		const uint256VrqZ5o = await UNIWHALE_ERC202sP2mA.viewSale.call({from: accounts[1]});
//		const uint256ULsEVgh = await UNIWHALE_ERC202sP2mA.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
//		await UNIWHALE_ERC202sP2mA.clearETH.call({from: accounts[1]});
//		const boolq6GK6mz = await UNIWHALE_ERC202sP2mA.tokenSale.call(addressAGWuXCm, {from: accounts[4]});

		await expect(UNIWHALE_ERC202sP2mA.getAirdrop.call(addressHwU2R4B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20PV4LInn = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFeRg1pk = accounts[3]
		const uintKuPdd3h = BigInt("825")
		const uintnnoQHJE = BigInt("1617")
		const uinteeZvw8V = BigInt("1661")
		const uintfbfhfqp = BigInt("1518")
		const uintHQpWuF = BigInt("1836")
		const uint256GMNds03 = await UNIWHALE_ERC20PV4LInn.viewAirdrop.call({from: accounts[4]});
		const boolIJFU5z2 = await UNIWHALE_ERC20PV4LInn.tokenSale.call(addressFeRg1pk, {from: accounts[1]});
		const uint256nLkPinX = await UNIWHALE_ERC20PV4LInn.viewAirdrop.call({from: accounts[4]});
		const uint256QX2HDU = await UNIWHALE_ERC20PV4LInn.startSale.call(uintHQpWuF, uintfbfhfqp, uinteeZvw8V, uintnnoQHJE, uintKuPdd3h, {from: accounts[3]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20t62JDFL = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintHDrQW4m = BigInt("1504")
		const uintE2IC7mi = BigInt("1929")
		const uintdd09wIP = BigInt("1188")
		const uintdvq0dMh = BigInt("983")
		const uintThqh1yW = BigInt("1378")
		const uint256nR4V0uF = await UNIWHALE_ERC20t62JDFL.viewSale.call({from: accounts[4]});
		const uint256cYAzkPJ = await UNIWHALE_ERC20t62JDFL.viewSale.call({from: accounts[1]});
		const uint256OizUCPm = await UNIWHALE_ERC20t62JDFL.startSale.call(uintThqh1yW, uintdvq0dMh, uintdd09wIP, uintE2IC7mi, uintHDrQW4m, {from: accounts[5]});
		const uint256zPVCrRy = await UNIWHALE_ERC20t62JDFL.viewSale.call({from: accounts[3]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20t62JDFL = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintDLKaI9K = BigInt("820")
		const uint4ym7Sd = BigInt("1386")
		const uintlRl45Um = BigInt("1376")
		const uintUDuGZZF = BigInt("687")
		const uint256cYAzkPJ = await UNIWHALE_ERC20t62JDFL.viewSale.call({from: accounts[1]});
		const uint256wXWFou = await UNIWHALE_ERC20t62JDFL.startAirdrop.call(uintUDuGZZF, uintlRl45Um, uint4ym7Sd, uintDLKaI9K, {from: accounts[5]});
		const uint256zPVCrRy = await UNIWHALE_ERC20t62JDFL.viewSale.call({from: accounts[3]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC202sP2mA = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addresss2GSUgr = accounts[4]
		const addresseLAPiTv = accounts[5]
//		await UNIWHALE_ERC202sP2mA.clearETH.call({from: accounts[3]});
//		const uint256U5fNz0 = await UNIWHALE_ERC202sP2mA.viewAirdrop.call({from: accounts[3]});
//		const uint256NXQRWtj = await UNIWHALE_ERC202sP2mA.viewSale.call({from: accounts[0]});
//		const uint256r6Tol94 = await UNIWHALE_ERC202sP2mA.viewAirdrop.call({from: accounts[3]});
//		const boolx3zI1y = await UNIWHALE_ERC202sP2mA.getAirdrop.call(addresss2GSUgr, {from: accounts[2]});
//		const uint256ULsEVgh = await UNIWHALE_ERC202sP2mA.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256oCUvoxT = await UNIWHALE_ERC202sP2mA.viewAirdrop.call({from: accounts[2]});
//		const boolq6GK6mz = await UNIWHALE_ERC202sP2mA.tokenSale.call(addresseLAPiTv, {from: accounts[4]});

		await expect(UNIWHALE_ERC202sP2mA.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})