const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20ojhVECW = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqKuRVcO = accounts[3]
		const addresszZAaC8G = accounts[3]
		const addressqAGWXz = accounts[1]
		const boolp0RhO6I = await UNIWHALE_ERC20ojhVECW.getAirdrop.call(addressqKuRVcO, {from: accounts[1]});
		const uint256GRmLxGk = await UNIWHALE_ERC20ojhVECW.viewAirdrop.call({from: accounts[0]});
		const uint256DBuv1pW = await UNIWHALE_ERC20ojhVECW.viewAirdrop.call({from: accounts[0]});
		const uint256t3E30m3 = await UNIWHALE_ERC20ojhVECW.viewSale.call({from: accounts[5]});
		const boolNJFEHBe = await UNIWHALE_ERC20ojhVECW.getAirdrop.call(addresszZAaC8G, {from: accounts[3]});
		const boolgymA3Bb = await UNIWHALE_ERC20ojhVECW.getAirdrop.call(addressqAGWXz, {from: accounts[2]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC201DcaGb = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintLCFIWAT = BigInt("788")
		const uintmKSZqIX = BigInt("1628")
		const uintqoPkCs = BigInt("1684")
		const uintCcQ3Pj5 = BigInt("1224")
		const uintSaTYhO5 = BigInt("301")
		const addresslQgUe3 = "0x0000000000000000000000000000000000000001"
		const uintECHQcn = BigInt("798")
		const uintrB2IqCG = BigInt("1142")
		const uintRydK51 = BigInt("1019")
		const uintCiOtSQT = BigInt("1331")
		const uintUAeW2p3 = BigInt("1827")
		const uintk2Nyi0Z = BigInt("740")
		const uintbXQvnt = BigInt("1303")
		const uinttsBOEvP = BigInt("1414")
		const uinthmKCNif = BigInt("404")
		const uintVNNm7iJ = BigInt("1769")
		const uintpgY3m7z = BigInt("1605")
		const uintIaoIYwS = BigInt("1070")
		const uintjfcH19x = BigInt("1194")
		const uint256831LmW = await UNIWHALE_ERC201DcaGb.startSale.call(uintSaTYhO5, uintCcQ3Pj5, uintqoPkCs, uintmKSZqIX, uintLCFIWAT, {from: accounts[4]});
		const boolixePgtl = await UNIWHALE_ERC201DcaGb.getAirdrop.call(addresslQgUe3, {from: accounts[2]});
		const uint256Gdu8sGn = await UNIWHALE_ERC201DcaGb.startSale.call(uintUAeW2p3, uintCiOtSQT, uintRydK51, uintrB2IqCG, uintECHQcn, {from: accounts[0]});
		const uint256VLhHGgn = await UNIWHALE_ERC201DcaGb.startAirdrop.call(uinthmKCNif, uinttsBOEvP, uintbXQvnt, uintk2Nyi0Z, {from: accounts[1]});
		const uint256fPOeYc = await UNIWHALE_ERC201DcaGb.startAirdrop.call(uintjfcH19x, uintIaoIYwS, uintpgY3m7z, uintVNNm7iJ, {from: accounts[3]});

		await expect(UNIWHALE_ERC201DcaGb.startSale.call(uintSaTYhO5, uintCcQ3Pj5, uintqoPkCs, uintmKSZqIX, uintLCFIWAT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20zwC8bg = await UNIWHALE_ERC20.new({from: accounts[0]});
		const address8MnK0m = accounts[1]
		const addressUbU05t3 = accounts[3]
		const boolEhuDxOr = await UNIWHALE_ERC20zwC8bg.tokenSale.call(address8MnK0m, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RacMgma = await UNIWHALE_ERC20zwC8bg.viewAirdrop.call({from: accounts[1]});
		const booldsYVUkE = await UNIWHALE_ERC20zwC8bg.tokenSale.call(addressUbU05t3, {from: accounts[4]});
		await UNIWHALE_ERC20zwC8bg.clearETH.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20zwC8bg.tokenSale.call(address8MnK0m, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20GfW2Xr = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uint256nQdma9 = await UNIWHALE_ERC20GfW2Xr.viewAirdrop.call({from: accounts[3]});
		await UNIWHALE_ERC20GfW2Xr.clearETH.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20GfW2Xr.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20V2psZ2S = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintelNVcNB = BigInt("821")
		const uintUFMIeCl = BigInt("229")
		const uintWPjAikW = BigInt("1115")
		const uint4jpwdn = BigInt("1842")
		const uintRE0wJHA = BigInt("1442")
		const uintMvZAqWX = BigInt("1725")
		const uintWFyWS3J = BigInt("1648")
		const uintq97sURR = BigInt("518")
		const uinttxL6Tsm = BigInt("1138")
		await UNIWHALE_ERC20V2psZ2S.clearETH.call({from: accounts[3]});
		const uint256YZrPhx = await UNIWHALE_ERC20V2psZ2S.startAirdrop.call(uint4jpwdn, uintWPjAikW, uintUFMIeCl, uintelNVcNB, {from: accounts[1]});
		await UNIWHALE_ERC20V2psZ2S.clearETH.call({from: accounts[0]});
		await UNIWHALE_ERC20V2psZ2S.clearETH.call({from: accounts[1]});
		const uint256FMULanc = await UNIWHALE_ERC20V2psZ2S.startSale.call(uinttxL6Tsm, uintq97sURR, uintWFyWS3J, uintMvZAqWX, uintRE0wJHA, {from: accounts[2]});
		await UNIWHALE_ERC20V2psZ2S.clearETH.call({from: accounts[5]});

		await expect(UNIWHALE_ERC20V2psZ2S.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20GfW2Xr = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uint256nQdma9 = await UNIWHALE_ERC20GfW2Xr.viewAirdrop.call({from: accounts[3]});
		const uint256v53AvEd = await UNIWHALE_ERC20GfW2Xr.viewSale.call({from: accounts[3]});
		await UNIWHALE_ERC20GfW2Xr.clearETH.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20GfW2Xr.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20GfW2Xr = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addresspB5hdc = accounts[0]
		const boolrFaqwrO = await UNIWHALE_ERC20GfW2Xr.getAirdrop.call(addresspB5hdc, {from: accounts[2]});
		const uint256qMi7oGd = await UNIWHALE_ERC20GfW2Xr.viewSale.call({from: accounts[4]});
		await UNIWHALE_ERC20GfW2Xr.clearETH.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20GfW2Xr.getAirdrop.call(addresspB5hdc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20GfW2Xr = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintXWgqmd = BigInt("452")
		const uintLvINjUu = BigInt("1394")
		const uintKXIfSQg = BigInt("756")
		const uinteAka85H = BigInt("1823")
		const uintK1bGmZm = BigInt("1011")
		const uint256nQdma9 = await UNIWHALE_ERC20GfW2Xr.viewAirdrop.call({from: accounts[3]});
		const uint256e1d8zrX = await UNIWHALE_ERC20GfW2Xr.startSale.call(uintK1bGmZm, uinteAka85H, uintKXIfSQg, uintLvINjUu, uintXWgqmd, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20GfW2Xr = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintwIpRIrg = BigInt("1703")
		const uintXYTeSeV = BigInt("545")
		const uintvM2sLTD = BigInt("653")
		const uintXK31nvg = BigInt("662")
		const uint256yQSBKrT = await UNIWHALE_ERC20GfW2Xr.startAirdrop.call(uintXK31nvg, uintvM2sLTD, uintXYTeSeV, uintwIpRIrg, {from: accounts[1]});
		const uint256nQdma9 = await UNIWHALE_ERC20GfW2Xr.viewAirdrop.call({from: accounts[3]});
		const uint256cqFYDUR = await UNIWHALE_ERC20GfW2Xr.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
	});
})