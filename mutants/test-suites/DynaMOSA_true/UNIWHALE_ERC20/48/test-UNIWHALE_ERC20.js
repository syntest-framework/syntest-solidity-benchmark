const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20RdwyLWf = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addressEj7wWVC = accounts[1]
//		const boolccfqcXI = await UNIWHALE_ERC20RdwyLWf.tokenSale.call(addressEj7wWVC, {from: accounts[3]});
//		const uint256sEggIlO = await UNIWHALE_ERC20RdwyLWf.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20RdwyLWf.tokenSale.call(addressEj7wWVC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20RrdnUcQ = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addressAxBfBkh = accounts[1]
		const uintunyoMzW = BigInt("849")
		const uintgGLUoJc = BigInt("1577")
		const uintPWrbwCJ = BigInt("1239")
		const uintTJ9gUsE = BigInt("1868")
		const uintkEqK9ud = BigInt("1527")
		const addressLkux0kY = accounts[2]
		const uintJPERzci = BigInt("577")
		const uintbMKANqc = BigInt("436")
		const uintxEfK32j = BigInt("1439")
		const uintxkQHxG7 = BigInt("2019")
//		const boolXDtdOXZ = await UNIWHALE_ERC20RrdnUcQ.getAirdrop.call(addressAxBfBkh, {from: accounts[0]});
//		const uint256qXz1sVq = await UNIWHALE_ERC20RrdnUcQ.startSale.call(uintkEqK9ud, uintTJ9gUsE, uintPWrbwCJ, uintgGLUoJc, uintunyoMzW, {from: accounts[4]});
//		const boolrIoHtYZ = await UNIWHALE_ERC20RrdnUcQ.tokenSale.call(addressLkux0kY, {from: accounts[4]});
//		const uint2565zJCvb = await UNIWHALE_ERC20RrdnUcQ.startAirdrop.call(uintxkQHxG7, uintxEfK32j, uintbMKANqc, uintJPERzci, {from: accounts[0]});
//		const uint256fWQZOmB = await UNIWHALE_ERC20RrdnUcQ.viewSale.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20RrdnUcQ.getAirdrop.call(addressAxBfBkh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20iuBJbsH = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressiHheRZp = accounts[4]
		const address5uMpQ3 = "0x0000000000000000000000000000000000000001"
		const uint256FdSAzY2 = await UNIWHALE_ERC20iuBJbsH.viewSale.call({from: accounts[4]});
//		const boolbdm3Ebq = await UNIWHALE_ERC20iuBJbsH.tokenSale.call(addressiHheRZp, {from: accounts[3]});
//		const uint256v1q68UJ = await UNIWHALE_ERC20iuBJbsH.viewAirdrop.call({from: accounts[3]});
//		const uint256BpNdOn = await UNIWHALE_ERC20iuBJbsH.viewSale.call({from: accounts[3]});
//		const uint256AgDtF5J = await UNIWHALE_ERC20iuBJbsH.viewAirdrop.call({from: accounts[1]});
//		const boolP3eHaej = await UNIWHALE_ERC20iuBJbsH.getAirdrop.call(address5uMpQ3, {from: accounts[5]});

		await expect(UNIWHALE_ERC20iuBJbsH.tokenSale.call(addressiHheRZp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20mrR5PrF = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintpaIQeEm = BigInt("1535")
		const uintHqDWsyc = BigInt("1974")
		const uintt93NN4K = BigInt("1868")
		const uintiwFDcn = BigInt("1187")
		const addressWSzfTux = accounts[3]
		const addressxUwDU4w = accounts[4]
		const uint256WaqBvPw = await UNIWHALE_ERC20mrR5PrF.viewAirdrop.call({from: accounts[4]});
		await UNIWHALE_ERC20mrR5PrF.clearETH.call({from: accounts[2]});
		const uint256xp7tJgA = await UNIWHALE_ERC20mrR5PrF.startAirdrop.call(uintiwFDcn, uintt93NN4K, uintHqDWsyc, uintpaIQeEm, {from: accounts[2]});
		const boolgkKDTFW = await UNIWHALE_ERC20mrR5PrF.tokenSale.call(addressWSzfTux, {from: accounts[0]});
		const boolWmSiXTF = await UNIWHALE_ERC20mrR5PrF.tokenSale.call(addressxUwDU4w, {from: accounts[0]});
		await UNIWHALE_ERC20mrR5PrF.clearETH.call({from: accounts[4]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20GzW0ZDh = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uint256JpwHXCd = await UNIWHALE_ERC20GzW0ZDh.viewAirdrop.call({from: accounts[3]});
		const uint256gkcqNQ = await UNIWHALE_ERC20GzW0ZDh.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256I0Cdnqi = await UNIWHALE_ERC20GzW0ZDh.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256etvquho = await UNIWHALE_ERC20GzW0ZDh.viewAirdrop.call({from: accounts[5]});
		const uint256cfxyp8K = await UNIWHALE_ERC20GzW0ZDh.viewAirdrop.call({from: accounts[3]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20aPie4s = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintjljNuRB = BigInt("473")
		const uintH1fpIPy = BigInt("100")
		const uintGJV104F = BigInt("1240")
		const uintKt8BeaT = BigInt("1324")
		const addresshnooiSN = accounts[5]
		const uint256vEXtbrm = await UNIWHALE_ERC20aPie4s.startAirdrop.call(uintKt8BeaT, uintGJV104F, uintH1fpIPy, uintjljNuRB, {from: accounts[3]});
		const uint256vmz8edf = await UNIWHALE_ERC20aPie4s.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
//		const bool8U14Vi = await UNIWHALE_ERC20aPie4s.tokenSale.call(addresshnooiSN, {from: accounts[3]});

		await expect(UNIWHALE_ERC20aPie4s.tokenSale.call(addresshnooiSN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20o3YoSo = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uint3Fr9b1 = BigInt("1737")
		const uinto06ySzE = BigInt("1730")
		const uintLpqEDHa = BigInt("361")
		const uintj0kii1J = BigInt("1418")
		const uintEfr2Hg9 = BigInt("502")
		const uintTdJ5O9k = BigInt("1394")
		const uintZbrL2l9 = BigInt("1849")
		const uintqRTZhDr = BigInt("536")
		const uintJtGcYYC = BigInt("1180")
		const uintSmay8b = BigInt("105")
		const uint256vDkTtm = await UNIWHALE_ERC20o3YoSo.startSale.call(uintEfr2Hg9, uintj0kii1J, uintLpqEDHa, uinto06ySzE, uint3Fr9b1, {from: accounts[1]});
		const uint256sKiR4P5 = await UNIWHALE_ERC20o3YoSo.viewSale.call({from: accounts[3]});
		const uint256XGp4pWZ = await UNIWHALE_ERC20o3YoSo.viewSale.call({from: accounts[0]});
//		const uint256vAP9dWM = await UNIWHALE_ERC20o3YoSo.startSale.call(uintSmay8b, uintJtGcYYC, uintqRTZhDr, uintZbrL2l9, uintTdJ5O9k, {from: accounts[0]});
//		await UNIWHALE_ERC20o3YoSo.clearETH.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20o3YoSo.startSale.call(uintSmay8b, uintJtGcYYC, uintqRTZhDr, uintZbrL2l9, uintTdJ5O9k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20TQgcPbJ = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintveheIW = BigInt("1675")
		const uintXlKcm6z = BigInt("415")
		const uinty2zSCwJ = BigInt("1107")
		const uintPrguORP = BigInt("1047")
		const uintaH8Wnmp = BigInt("730")
		const uintqvW1CUi = BigInt("1170")
		const uintaeiqwVD = BigInt("945")
		const uintsyvkVAK = BigInt("101")
		const uintvNsWswB = BigInt("1185")
		const uintmnMIoFo = BigInt("433")
		const uintrJBvUm = BigInt("731")
		const uinte3uMGTE = BigInt("1470")
		const uintKOWNQo4 = BigInt("1666")
		const uintM7C0Tuy = BigInt("758")
//		await UNIWHALE_ERC20TQgcPbJ.clearETH.call({from: accounts[4]});
//		const uint256LpfP3zN = await UNIWHALE_ERC20TQgcPbJ.startSale.call(uintaH8Wnmp, uintPrguORP, uinty2zSCwJ, uintXlKcm6z, uintveheIW, {from: accounts[4]});
//		const uint256BebgFcK = await UNIWHALE_ERC20TQgcPbJ.startSale.call(uintmnMIoFo, uintvNsWswB, uintsyvkVAK, uintaeiqwVD, uintqvW1CUi, {from: accounts[1]});
//		const uint256lx7umDo = await UNIWHALE_ERC20TQgcPbJ.startAirdrop.call(uintM7C0Tuy, uintKOWNQo4, uinte3uMGTE, uintrJBvUm, {from: accounts[5]});

		await expect(UNIWHALE_ERC20TQgcPbJ.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})