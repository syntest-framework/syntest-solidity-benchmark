const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractTYH9lDU = await ERC721.new({from: accounts[4]});
		const tokenIdFPRzDxC = BigInt("1288")
		const tokenIdjgjaj1I = BigInt("574")
		const tokenIdC3nxqil = BigInt("2028")
		const tokenIdlPmSJCI = BigInt("1864")
		const tox1aB66a = accounts[5]
		const fromSKeObXA = accounts[1]
		const tokenIdFCvGCqh = BigInt("879")
		const tofx7FItT = accounts[4]
		const nullO4eYA5K = await contractTYH9lDU.ownerOf.call(tokenIdFPRzDxC, {from: accounts[1]});
		const nullWq3nIM0 = await contractTYH9lDU.ownerOf.call(tokenIdjgjaj1I, {from: accounts[1]});
		const null2Hlqfw = await contractTYH9lDU.getApproved.call(tokenIdC3nxqil, {from: accounts[5]});
		await contractTYH9lDU.safeTransferFrom.call(fromSKeObXA, tox1aB66a, tokenIdlPmSJCI, {from: accounts[0]});
		await contractTYH9lDU.approve.call(tofx7FItT, tokenIdFCvGCqh, {from: accounts[3]});

		await expect(contractTYH9lDU.ownerOf.call(tokenIdFPRzDxC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractlsTAodl = await ERC721.new({from: accounts[2]});
		const ownerKuG3Xpk = accounts[2]
		const operatorh6iEGRH = accounts[3]
		const ownerk2zzzL3 = accounts[3]
		const operatorkL7qGwp = accounts[0]
		const ownerhzZtIOy = accounts[4]
		const tokenIdUQitJqc = BigInt("1876")
		const nullOD0cL2x = await contractlsTAodl.balanceOf.call(ownerKuG3Xpk, {from: accounts[3]});
		const nullV8PKkjJ = await contractlsTAodl.isApprovedForAll.call(ownerk2zzzL3, operatorh6iEGRH, {from: accounts[4]});
		const nullPZk3rHd = await contractlsTAodl.isApprovedForAll.call(ownerhzZtIOy, operatorkL7qGwp, {from: accounts[2]});
		const nullpygvRpN = await contractlsTAodl.getApproved.call(tokenIdUQitJqc, {from: accounts[2]});

		assert.equal(nullOD0cL2x, 0)
		assert.equal(nullPZk3rHd, false)
		assert.equal(nullV8PKkjJ, false)
		await expect(contractlsTAodl.getApproved.call(tokenIdUQitJqc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractf9jkmCp = await ERC721.new({from: accounts[1]});
		const tokenIdpT7Qei = BigInt("1449")
		const toNHwOijm = accounts[0]
		const fromCSN74Ah = accounts[4]
		const _dataPXiy2kI = "0x11121b0b170d040b040c1916"
		const tokenIdTE5aJS = BigInt("1987")
		const toFJgGYzw = accounts[0]
		const fromDkjIerl = accounts[3]
		const approvedZ9jPHAy = true
		const tojKQ2dz8 = accounts[4]
		const tokenIdWaLK77 = BigInt("1566")
		await contractf9jkmCp.safeTransferFrom.call(fromCSN74Ah, toNHwOijm, tokenIdpT7Qei, {from: accounts[0]});
		await contractf9jkmCp.safeTransferFrom.call(fromDkjIerl, toFJgGYzw, tokenIdTE5aJS, _dataPXiy2kI, {from: accounts[2]});
		await contractf9jkmCp.setApprovalForAll.call(tojKQ2dz8, approvedZ9jPHAy, {from: accounts[0]});
		const nullmxgf9z = await contractf9jkmCp.getApproved.call(tokenIdWaLK77, {from: accounts[3]});

		await expect(contractf9jkmCp.safeTransferFrom.call(fromCSN74Ah, toNHwOijm, tokenIdpT7Qei, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractyRQeqvj = await ERC721.new({from: accounts[5]});
		const operatorJ6Fm4wL = accounts[3]
		const ownerypWj5D = accounts[2]
		const tokenIdzVeT5XN = BigInt("1813")
		const toHnPObT1 = accounts[1]
		const fromi0WyoMH = "0x0000000000000000000000000000000000000001"
		const nullinFBKMK = await contractyRQeqvj.isApprovedForAll.call(ownerypWj5D, operatorJ6Fm4wL, {from: accounts[0]});
		await contractyRQeqvj.transferFrom.call(fromi0WyoMH, toHnPObT1, tokenIdzVeT5XN, {from: accounts[1]});

		assert.equal(nullinFBKMK, false)
		await expect(contractyRQeqvj.transferFrom.call(fromi0WyoMH, toHnPObT1, tokenIdzVeT5XN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractAK4tAO = await ERC721.new({from: accounts[5]});
		const approvedeOtSEsS = false
		const tosfO90Q8 = accounts[2]
		const tokenIdj8yMmhc = BigInt("229")
		const tokenIdDGxyT8 = BigInt("1094")
		const approvedgTJqiLn = true
		const toElmkK87 = accounts[1]
		const ownern1gOkzS = accounts[5]
		const tokenIdQm85ptS = BigInt("165")
		await contractAK4tAO.setApprovalForAll.call(tosfO90Q8, approvedeOtSEsS, {from: accounts[0]});
		const nullF7zzwgC = await contractAK4tAO.ownerOf.call(tokenIdj8yMmhc, {from: accounts[2]});
		const nullP5EHG9N = await contractAK4tAO.ownerOf.call(tokenIdDGxyT8, {from: accounts[3]});
		await contractAK4tAO.setApprovalForAll.call(toElmkK87, approvedgTJqiLn, {from: accounts[3]});
		const nullNrgIFdk = await contractAK4tAO.balanceOf.call(ownern1gOkzS, {from: "0x0000000000000000000000000000000000000001"});
		const nullboE8K09 = await contractAK4tAO.ownerOf.call(tokenIdQm85ptS, {from: accounts[4]});

		await expect(contractAK4tAO.setApprovalForAll.call(tosfO90Q8, approvedeOtSEsS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFbnwl0 = await ERC721.new({from: accounts[5]});
		const operatorpMfuS7M = accounts[3]
		const ownerVFK75t2 = accounts[2]
		const tokenIdvthPeyF = BigInt("867")
		const toq8veCPl = accounts[0]
		const nullcMWdg8G = await contractFbnwl0.isApprovedForAll.call(ownerVFK75t2, operatorpMfuS7M, {from: accounts[0]});
		await contractFbnwl0.approve.call(toq8veCPl, tokenIdvthPeyF, {from: accounts[5]});

		assert.equal(nullcMWdg8G, false)
		await expect(contractFbnwl0.approve.call(toq8veCPl, tokenIdvthPeyF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractsifwJj1 = await ERC721.new({from: accounts[2]});
		const approvedIpR2Q0y = true
		const toptusAr = accounts[5]
		const approveda7qLS8m = false
		const to6Wl8wU = accounts[0]
		const tokenIdInijSuN = BigInt("1746")
		const toB3esS0p = accounts[5]
		const fromn7uft3H = accounts[2]
		const tokenIdweQCV03 = BigInt("966")
		const ownerydjDxJE = accounts[3]
		await contractsifwJj1.setApprovalForAll.call(toptusAr, approvedIpR2Q0y, {from: accounts[3]});
		await contractsifwJj1.setApprovalForAll.call(to6Wl8wU, approveda7qLS8m, {from: accounts[0]});
		await contractsifwJj1.transferFrom.call(fromn7uft3H, toB3esS0p, tokenIdInijSuN, {from: accounts[2]});
		const nullD714Uhn = await contractsifwJj1.ownerOf.call(tokenIdweQCV03, {from: accounts[1]});
		const nullH4i9kH3 = await contractsifwJj1.balanceOf.call(ownerydjDxJE, {from: accounts[3]});

		await expect(contractsifwJj1.setApprovalForAll.call(toptusAr, approvedIpR2Q0y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracteirJyFd = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdqadchdi = BigInt("235")
		const to45JfsU = accounts[3]
		const fromErWFBOF = accounts[1]
		const tokenIdAOWOSB = BigInt("66")
		const toAJkiKPC = accounts[3]
		const tokenIdGTrgZu6 = BigInt("1818")
		const tovk94K3U = accounts[1]
		const fromi0tZhiF = accounts[4]
		const _dataJMPyONu = "0x0c150b1d050b061a10"
		const tokenIdqi5MR7k = BigInt("1209")
		const toIdgnZHq = accounts[3]
		const fromdUiKS8w = "0x0000000000000000000000000000000000000001"
		const ownercmxiJF4 = accounts[0]
		const tokenIdSDsO9fQ = BigInt("525")
		await contracteirJyFd.safeTransferFrom.call(fromErWFBOF, to45JfsU, tokenIdqadchdi, {from: accounts[0]});
		await contracteirJyFd.approve.call(toAJkiKPC, tokenIdAOWOSB, {from: accounts[3]});
		await contracteirJyFd.transferFrom.call(fromi0tZhiF, tovk94K3U, tokenIdGTrgZu6, {from: accounts[2]});
		await contracteirJyFd.safeTransferFrom.call(fromdUiKS8w, toIdgnZHq, tokenIdqi5MR7k, _dataJMPyONu, {from: accounts[1]});
		const nullns8Kjge = await contracteirJyFd.balanceOf.call(ownercmxiJF4, {from: accounts[0]});
		const nullvqHLP6p = await contracteirJyFd.ownerOf.call(tokenIdSDsO9fQ, {from: accounts[5]});
	});
})