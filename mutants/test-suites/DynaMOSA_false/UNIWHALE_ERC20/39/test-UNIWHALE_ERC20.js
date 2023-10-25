const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20SbcmXrQ = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintj4InSeA = BigInt("2009")
		const uintxfkaMHt = BigInt("94")
		const uintRXokFR = BigInt("1201")
		const uintL9PFO0G = BigInt("697")
		const uint256sgy6hTp = await UNIWHALE_ERC20SbcmXrQ.viewAirdrop.call({from: accounts[2]});
//		const uint256DG8UT5S = await UNIWHALE_ERC20SbcmXrQ.startAirdrop.call(uintL9PFO0G, uintRXokFR, uintxfkaMHt, uintj4InSeA, {from: accounts[0]});

		await expect(UNIWHALE_ERC20SbcmXrQ.startAirdrop.call(uintL9PFO0G, uintRXokFR, uintxfkaMHt, uintj4InSeA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC201eRhhg = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvM9EsfE = BigInt("921")
		const uintX0GdOJt = BigInt("1690")
		const uintUudvxin = BigInt("1975")
		const uintEtJlIr = BigInt("437")
		const uinthcPj7C4 = BigInt("523")
		const addressWjtt1g8 = accounts[1]
		const addresszSEOCRL = accounts[3]
		const addresskb5e0h = accounts[1]
		const uint256x2U4JW = await UNIWHALE_ERC201eRhhg.startSale.call(uinthcPj7C4, uintEtJlIr, uintUudvxin, uintX0GdOJt, uintvM9EsfE, {from: "0x0000000000000000000000000000000000000001"});
		const boolNC1q3rb = await UNIWHALE_ERC201eRhhg.getAirdrop.call(addressWjtt1g8, {from: accounts[1]});
		const boolD2uGYao = await UNIWHALE_ERC201eRhhg.getAirdrop.call(addresszSEOCRL, {from: accounts[3]});
		const booleaX8g7B = await UNIWHALE_ERC201eRhhg.tokenSale.call(addresskb5e0h, {from: accounts[2]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20idYKkV1 = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addressyIHG66S = accounts[2]
		const addressxdVDjXJ = accounts[1]
		const uintvoNusW = BigInt("58")
		const uintJRixKsi = BigInt("795")
		const uintSyO9QRi = BigInt("1813")
		const uintfaBVInf = BigInt("2001")
		const uintlmtadoR = BigInt("1290")
//		const boolpGDQSBo = await UNIWHALE_ERC20idYKkV1.tokenSale.call(addressyIHG66S, {from: accounts[4]});
//		const boolDwT115k = await UNIWHALE_ERC20idYKkV1.getAirdrop.call(addressxdVDjXJ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Dx5F1QR = await UNIWHALE_ERC20idYKkV1.startSale.call(uintlmtadoR, uintfaBVInf, uintSyO9QRi, uintJRixKsi, uintvoNusW, {from: accounts[3]});

		await expect(UNIWHALE_ERC20idYKkV1.tokenSale.call(addressyIHG66S, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20DM6qHhG = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressozE3Muk = "0x0000000000000000000000000000000000000001"
		const uintS7GvoCl = BigInt("1472")
		const uintX2jg0N9 = BigInt("500")
		const uintfLEiCD = BigInt("1909")
		const uintcGvzbMl = BigInt("1331")
		const uint256jDpEde = await UNIWHALE_ERC20DM6qHhG.viewSale.call({from: accounts[0]});
//		const boolQUcgN4W = await UNIWHALE_ERC20DM6qHhG.tokenSale.call(addressozE3Muk, {from: accounts[1]});
//		const uint256sePXwt = await UNIWHALE_ERC20DM6qHhG.startAirdrop.call(uintcGvzbMl, uintfLEiCD, uintX2jg0N9, uintS7GvoCl, {from: accounts[0]});

		await expect(UNIWHALE_ERC20DM6qHhG.tokenSale.call(addressozE3Muk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NiTdySQ = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressXb7CWy = accounts[5]
		const uintAFISrdr = BigInt("76")
		const uintPjo3nVK = BigInt("670")
		const uintzNhQJ8g = BigInt("271")
		const uintgubfp3 = BigInt("1738")
		const uintKcicj57 = BigInt("143")
		const uintIv7mSZU = BigInt("1766")
		const uintXfn5h62 = BigInt("522")
		const uintdPZlz4L = BigInt("1741")
		const uintPChFjKR = BigInt("381")
		const uintmix0R0d = BigInt("709")
		const uintLoj5kM7 = BigInt("1862")
		const uintB8MC9Xa = BigInt("3")
		const uintRTD05Jy = BigInt("883")
		const uintmZ92iMF = BigInt("1913")
		const addressmEJ2T5t = accounts[3]
//		const boolKdBRACR = await UNIWHALE_ERC20NiTdySQ.getAirdrop.call(addressXb7CWy, {from: accounts[0]});
//		const uint256OjLlGKE = await UNIWHALE_ERC20NiTdySQ.startSale.call(uintKcicj57, uintgubfp3, uintzNhQJ8g, uintPjo3nVK, uintAFISrdr, {from: accounts[1]});
//		const uint256MCtNRkF = await UNIWHALE_ERC20NiTdySQ.startAirdrop.call(uintPChFjKR, uintdPZlz4L, uintXfn5h62, uintIv7mSZU, {from: accounts[5]});
//		const uint256C4BEOD = await UNIWHALE_ERC20NiTdySQ.startSale.call(uintmZ92iMF, uintRTD05Jy, uintB8MC9Xa, uintLoj5kM7, uintmix0R0d, {from: accounts[2]});
//		const boolRG6dWjF = await UNIWHALE_ERC20NiTdySQ.tokenSale.call(addressmEJ2T5t, {from: accounts[5]});

		await expect(UNIWHALE_ERC20NiTdySQ.getAirdrop.call(addressXb7CWy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20SbcmXrQ = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintygeexj = BigInt("1559")
		const uintp6JVB0d = BigInt("1152")
		const uintoeEjDZJ = BigInt("813")
		const uintdmM43O4 = BigInt("516")
		const uintefUq907 = BigInt("301")
//		await UNIWHALE_ERC20SbcmXrQ.clearETH.call({from: accounts[4]});
//		const uint256STHSIBu = await UNIWHALE_ERC20SbcmXrQ.startSale.call(uintefUq907, uintdmM43O4, uintoeEjDZJ, uintp6JVB0d, uintygeexj, {from: accounts[4]});
//		const uint256sgy6hTp = await UNIWHALE_ERC20SbcmXrQ.viewAirdrop.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20SbcmXrQ.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20FzRYGmh = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintxD9WIM9 = BigInt("1330")
		const uint7DBio5 = BigInt("560")
		const uintk8tM2n = BigInt("2008")
		const uintyIE3gas = BigInt("1045")
		const uintkd9KeQq = BigInt("325")
		const uintUmQZOul = BigInt("1053")
		const uintGmMPfy4 = BigInt("1970")
		const uintyR4pXr = BigInt("512")
		const uintuYu1cp5 = BigInt("1904")
		const uint256cm5F7z = await UNIWHALE_ERC20FzRYGmh.startAirdrop.call(uintyIE3gas, uintk8tM2n, uint7DBio5, uintxD9WIM9, {from: accounts[3]});
//		await UNIWHALE_ERC20FzRYGmh.clearETH.call({from: accounts[2]});
//		const uint256c3ZIFVz = await UNIWHALE_ERC20FzRYGmh.startSale.call(uintuYu1cp5, uintyR4pXr, uintGmMPfy4, uintUmQZOul, uintkd9KeQq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20FzRYGmh.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})