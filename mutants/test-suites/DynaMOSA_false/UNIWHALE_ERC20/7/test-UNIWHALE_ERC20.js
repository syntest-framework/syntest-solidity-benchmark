const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20YGpcWC4 = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintGLT6PsS = BigInt("1468")
		const uintvu9Lrtz = BigInt("1161")
		const uintmRY6Tf = BigInt("772")
		const uintTo8zwjG = BigInt("161")
		const uintLZkILjf = BigInt("1724")
		const addresswxCtBDa = "0x0000000000000000000000000000000000000001"
//		const uint256YJI1YiE = await UNIWHALE_ERC20YGpcWC4.startSale.call(uintLZkILjf, uintTo8zwjG, uintmRY6Tf, uintvu9Lrtz, uintGLT6PsS, {from: accounts[4]});
//		await UNIWHALE_ERC20YGpcWC4.clearETH.call({from: accounts[3]});
//		const booltRM8K5N = await UNIWHALE_ERC20YGpcWC4.tokenSale.call(addresswxCtBDa, {from: accounts[0]});

		await expect(UNIWHALE_ERC20YGpcWC4.startSale.call(uintLZkILjf, uintTo8zwjG, uintmRY6Tf, uintvu9Lrtz, uintGLT6PsS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20q3U7H6b = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uint6ZBdk3 = BigInt("610")
		const uinttlq0NbP = BigInt("1687")
		const uintpaYYAtP = BigInt("422")
		const uinteekLEJ = BigInt("661")
		const uint256UJ1n5qR = await UNIWHALE_ERC20q3U7H6b.viewSale.call({from: accounts[3]});
//		const uint256Cmwrmey = await UNIWHALE_ERC20q3U7H6b.startAirdrop.call(uinteekLEJ, uintpaYYAtP, uinttlq0NbP, uint6ZBdk3, {from: accounts[1]});
//		const uint256A9fKYV2 = await UNIWHALE_ERC20q3U7H6b.viewSale.call({from: accounts[1]});
//		const uint256sNsT1Bx = await UNIWHALE_ERC20q3U7H6b.viewAirdrop.call({from: accounts[3]});
//		const uint256ko7FMXU = await UNIWHALE_ERC20q3U7H6b.viewSale.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20q3U7H6b.startAirdrop.call(uinteekLEJ, uintpaYYAtP, uinttlq0NbP, uint6ZBdk3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20OTAdWpF = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uint256N01q0GT = await UNIWHALE_ERC20OTAdWpF.viewAirdrop.call({from: accounts[4]});
		const uint256pF9knhk = await UNIWHALE_ERC20OTAdWpF.viewSale.call({from: accounts[3]});
//		await UNIWHALE_ERC20OTAdWpF.clearETH.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20OTAdWpF.clearETH.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20spPTiNa = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addressxgmH6aF = accounts[2]
		const uint256LxTvrVU = await UNIWHALE_ERC20spPTiNa.viewSale.call({from: accounts[4]});
		const uint256J3TkF4a = await UNIWHALE_ERC20spPTiNa.viewAirdrop.call({from: accounts[5]});
		const uint256wgfGtTj = await UNIWHALE_ERC20spPTiNa.viewAirdrop.call({from: accounts[1]});
//		const boolVtuQF5m = await UNIWHALE_ERC20spPTiNa.tokenSale.call(addressxgmH6aF, {from: accounts[2]});

		await expect(UNIWHALE_ERC20spPTiNa.tokenSale.call(addressxgmH6aF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC201n3DHI = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPyY2sZn = accounts[3]
		const uinto0u03uC = BigInt("941")
		const uintzrVp8P = BigInt("1246")
		const uintz3pMrxC = BigInt("74")
		const uintWheVXTD = BigInt("1202")
		const boolurezkSz = await UNIWHALE_ERC201n3DHI.tokenSale.call(addressPyY2sZn, {from: accounts[0]});
		await UNIWHALE_ERC201n3DHI.clearETH.call({from: accounts[4]});
		const uint256lKt13Mb = await UNIWHALE_ERC201n3DHI.startAirdrop.call(uintWheVXTD, uintz3pMrxC, uintzrVp8P, uinto0u03uC, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20UEuE0Cv = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintR6vPx2 = BigInt("1485")
		const uintRDGAy16 = BigInt("1186")
		const uintM4MlHii = BigInt("556")
		const uintXGIrDX8 = BigInt("1084")
		const uintxdmKZD = BigInt("887")
		const addressAGL9edk = accounts[2]
		const uint256XUIpYo = await UNIWHALE_ERC20UEuE0Cv.startSale.call(uintxdmKZD, uintXGIrDX8, uintM4MlHii, uintRDGAy16, uintR6vPx2, {from: accounts[3]});
		const uint256DTOYtyf = await UNIWHALE_ERC20UEuE0Cv.viewAirdrop.call({from: accounts[3]});
		const uint256qvDZHw7 = await UNIWHALE_ERC20UEuE0Cv.viewAirdrop.call({from: accounts[3]});
//		const boolK8aNB7E = await UNIWHALE_ERC20UEuE0Cv.getAirdrop.call(addressAGL9edk, {from: accounts[3]});

		await expect(UNIWHALE_ERC20UEuE0Cv.getAirdrop.call(addressAGL9edk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20spPTiNa = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintiHGqGH = BigInt("1086")
		const uintCE7U24A = BigInt("863")
		const uintghDExez = BigInt("238")
		const uintfXdex44 = BigInt("1597")
		const addressss6sOdS = accounts[5]
		const addresstyniIht = accounts[2]
		const uint256LxTvrVU = await UNIWHALE_ERC20spPTiNa.viewSale.call({from: accounts[4]});
		const uint256J3TkF4a = await UNIWHALE_ERC20spPTiNa.viewAirdrop.call({from: accounts[5]});
		const uint256wgfGtTj = await UNIWHALE_ERC20spPTiNa.viewAirdrop.call({from: accounts[1]});
		const uint256dsainz8 = await UNIWHALE_ERC20spPTiNa.startAirdrop.call(uintfXdex44, uintghDExez, uintCE7U24A, uintiHGqGH, {from: accounts[3]});
//		const boolM2u983C = await UNIWHALE_ERC20spPTiNa.tokenSale.call(addressss6sOdS, {from: accounts[4]});
//		const boolVtuQF5m = await UNIWHALE_ERC20spPTiNa.tokenSale.call(addresstyniIht, {from: accounts[2]});

		await expect(UNIWHALE_ERC20spPTiNa.tokenSale.call(addressss6sOdS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20ZWpnQBr = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addressCd31Cl = accounts[1]
		const uintK6ZLpEU = BigInt("1558")
		const uintL9nHeU4 = BigInt("862")
		const uintnZXstep = BigInt("822")
		const uintQfZghd7 = BigInt("1195")
		const uintv80xxFc = BigInt("397")
		const uinte8bHoTU = BigInt("241")
		const uintswQtQ28 = BigInt("123")
		const uintlqoWvLf = BigInt("880")
		const uintfjAA9o = BigInt("492")
		const uintJaLcnIY = BigInt("791")
		const uint256ZayatGw = await UNIWHALE_ERC20ZWpnQBr.viewSale.call({from: accounts[4]});
		const uint256M3aiKBQ = await UNIWHALE_ERC20ZWpnQBr.viewSale.call({from: accounts[2]});
		const uint256tQMWBa2 = await UNIWHALE_ERC20ZWpnQBr.viewSale.call({from: accounts[4]});
//		await UNIWHALE_ERC20ZWpnQBr.clearETH.call({from: accounts[2]});
//		const boolwvxVfR2 = await UNIWHALE_ERC20ZWpnQBr.tokenSale.call(addressCd31Cl, {from: accounts[1]});
//		const uint256ztGdMsO = await UNIWHALE_ERC20ZWpnQBr.startSale.call(uintv80xxFc, uintQfZghd7, uintnZXstep, uintL9nHeU4, uintK6ZLpEU, {from: accounts[0]});
//		const uint256BXUR72G = await UNIWHALE_ERC20ZWpnQBr.startSale.call(uintJaLcnIY, uintfjAA9o, uintlqoWvLf, uintswQtQ28, uinte8bHoTU, {from: accounts[4]});

		await expect(UNIWHALE_ERC20ZWpnQBr.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})