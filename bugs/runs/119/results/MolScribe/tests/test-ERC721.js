const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractSU1HiCq = await ERC721.new({from: accounts[4]});
		const approvedVKqosMp = true
		const toepEDHVE = accounts[0]
		const tokenIdMczLJbR = BigInt("81")
		const to1Si8zE = accounts[1]
		const fromoIByYKd = accounts[1]
		const operatorNcPMIV = accounts[4]
		const owner8pazTz = accounts[2]
		const tokenIdoK8TH2R = BigInt("478")
		const toFYHcR3W = accounts[5]
		const fromxGmJckS = accounts[1]
		const ownerRPCg6yR = accounts[1]
		await contractSU1HiCq.setApprovalForAll.call(toepEDHVE, approvedVKqosMp, {from: accounts[0]});
		await contractSU1HiCq.transferFrom.call(fromoIByYKd, to1Si8zE, tokenIdMczLJbR, {from: accounts[3]});
		const nullH5HQ6ck = await contractSU1HiCq.isApprovedForAll.call(owner8pazTz, operatorNcPMIV, {from: accounts[5]});
		await contractSU1HiCq.transferFrom.call(fromxGmJckS, toFYHcR3W, tokenIdoK8TH2R, {from: accounts[3]});
		const nullf830Ehh = await contractSU1HiCq.balanceOf.call(ownerRPCg6yR, {from: accounts[2]});

		await expect(contractSU1HiCq.setApprovalForAll.call(toepEDHVE, approvedVKqosMp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractUQFkAgb = await ERC721.new({from: accounts[2]});
		const tokenIdPvThhKM = BigInt("911")
		const tocYCICSO = accounts[3]
		const fromCaX3Zsf = accounts[2]
		const operatoraS2aD7 = accounts[0]
		const ownerR018aOv = accounts[3]
		const tokenId9DKObR = BigInt("989")
		const tokenIdiAdSvm = BigInt("891")
		const tovmxmPg = accounts[0]
		await contractUQFkAgb.safeTransferFrom.call(fromCaX3Zsf, tocYCICSO, tokenIdPvThhKM, {from: accounts[2]});
		const nulldprrBY = await contractUQFkAgb.isApprovedForAll.call(ownerR018aOv, operatoraS2aD7, {from: accounts[2]});
		const nullUppaC2 = await contractUQFkAgb.getApproved.call(tokenId9DKObR, {from: accounts[3]});
		await contractUQFkAgb.approve.call(tovmxmPg, tokenIdiAdSvm, {from: accounts[1]});

		await expect(contractUQFkAgb.safeTransferFrom.call(fromCaX3Zsf, tocYCICSO, tokenIdPvThhKM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractzSLRSoH = await ERC721.new({from: accounts[0]});
		const approvedgYY5miX = false
		const toQhOEldU = accounts[2]
		const tokenIdFfKnvAi = BigInt("1267")
		const tokenIdsktnQB1 = BigInt("1")
		const toy9nbTZH = accounts[3]
		const fromg6wWWY1 = accounts[3]
		const operatorjVWz1Mp = accounts[3]
		const ownernfW5BwG = accounts[5]
		const tokenIdCSiJ87L = BigInt("323")
		const tokenIdWa0ZVIg = BigInt("1748")
		const touGEpVsJ = accounts[0]
		const fromAdsWJOs = accounts[3]
		await contractzSLRSoH.setApprovalForAll.call(toQhOEldU, approvedgYY5miX, {from: accounts[1]});
		const nulliobY2eK = await contractzSLRSoH.getApproved.call(tokenIdFfKnvAi, {from: accounts[4]});
		await contractzSLRSoH.safeTransferFrom.call(fromg6wWWY1, toy9nbTZH, tokenIdsktnQB1, {from: accounts[1]});
		const nullcSfIgEz = await contractzSLRSoH.isApprovedForAll.call(ownernfW5BwG, operatorjVWz1Mp, {from: accounts[2]});
		const nullzkTe5Rf = await contractzSLRSoH.getApproved.call(tokenIdCSiJ87L, {from: accounts[3]});
		await contractzSLRSoH.transferFrom.call(fromAdsWJOs, touGEpVsJ, tokenIdWa0ZVIg, {from: accounts[2]});

		await expect(contractzSLRSoH.setApprovalForAll.call(toQhOEldU, approvedgYY5miX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractwBk2y5k = await ERC721.new({from: accounts[2]});
		const tokenIdQGkwqV = BigInt("1048")
		const toVnASuUp = accounts[4]
		const approvedUOdyWdh = true
		const torDKX3HT = accounts[2]
		const _dataG4CVnBB = "0x080a001c000f0314150c02171d"
		const tokenIdBxEDov = BigInt("676")
		const toUBxFBw = accounts[3]
		const fromfpTeHo3 = accounts[0]
		const operatorfQEryBl = accounts[2]
		const ownerkWk82cu = accounts[2]
		const tokenIdif3htwH = BigInt("73")
		const tod8lsmN = accounts[4]
		const fromAz9ChSh = accounts[3]
		const tokenIdcts8sLV = BigInt("1016")
		const toWeiDIWm = accounts[5]
		const fromptMUBNt = accounts[4]
		await contractwBk2y5k.approve.call(toVnASuUp, tokenIdQGkwqV, {from: "0x0000000000000000000000000000000000000001"});
		await contractwBk2y5k.setApprovalForAll.call(torDKX3HT, approvedUOdyWdh, {from: accounts[3]});
		await contractwBk2y5k.safeTransferFrom.call(fromfpTeHo3, toUBxFBw, tokenIdBxEDov, _dataG4CVnBB, {from: accounts[3]});
		const nullMTdkC8V = await contractwBk2y5k.isApprovedForAll.call(ownerkWk82cu, operatorfQEryBl, {from: accounts[4]});
		await contractwBk2y5k.safeTransferFrom.call(fromAz9ChSh, tod8lsmN, tokenIdif3htwH, {from: accounts[3]});
		await contractwBk2y5k.transferFrom.call(fromptMUBNt, toWeiDIWm, tokenIdcts8sLV, {from: accounts[0]});

		await expect(contractwBk2y5k.approve.call(toVnASuUp, tokenIdQGkwqV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractmF0NUdX = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const approvedeErFe1H = false
		const togkLWQtJ = accounts[1]
		const approvedHsSEEKd = false
		const togaFrKm = accounts[4]
		const tokenIdhibirUM = BigInt("241")
		const tolQEXMqY = accounts[1]
		const tokenIdsGja8ht = BigInt("1555")
		const toPxcVaYw = accounts[2]
		const tokenIdMKvjzRE = BigInt("384")
		await contractmF0NUdX.setApprovalForAll.call(togkLWQtJ, approvedeErFe1H, {from: accounts[1]});
		await contractmF0NUdX.setApprovalForAll.call(togaFrKm, approvedHsSEEKd, {from: accounts[1]});
		await contractmF0NUdX.approve.call(tolQEXMqY, tokenIdhibirUM, {from: accounts[2]});
		await contractmF0NUdX.approve.call(toPxcVaYw, tokenIdsGja8ht, {from: accounts[4]});
		const nullik1SSW4 = await contractmF0NUdX.ownerOf.call(tokenIdMKvjzRE, {from: accounts[2]});
	});
})