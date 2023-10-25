const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractH1aadZQ = await ERC721.new({from: accounts[4]});
		const approved6m0tnA = false
		const toJprdQX2 = accounts[5]
		const _datavWHIVwR = "0x011b0906171b190e14101e"
		const tokenIdy6gGFm = BigInt("1238")
		const tobsvVQ4o = accounts[5]
		const fromRx2TZYI = accounts[2]
		const tokenIdTC0q4Do = BigInt("1302")
		const toynJs15O = accounts[1]
		const fromC3FMoJH = accounts[2]
		const operatorJfD1FVf = accounts[4]
		const ownerbiTA3e = accounts[2]
		const tokenIdGRrNrRI = BigInt("1225")
		const tobiYFUan = accounts[0]
		const fromzi6jMf2 = accounts[0]
		await contractH1aadZQ.setApprovalForAll.call(toJprdQX2, approved6m0tnA, {from: accounts[3]});
		await contractH1aadZQ.safeTransferFrom.call(fromRx2TZYI, tobsvVQ4o, tokenIdy6gGFm, _datavWHIVwR, {from: accounts[4]});
		await contractH1aadZQ.transferFrom.call(fromC3FMoJH, toynJs15O, tokenIdTC0q4Do, {from: accounts[4]});
		const nullbh96BK4 = await contractH1aadZQ.isApprovedForAll.call(ownerbiTA3e, operatorJfD1FVf, {from: accounts[4]});
		await contractH1aadZQ.safeTransferFrom.call(fromzi6jMf2, tobiYFUan, tokenIdGRrNrRI, {from: accounts[0]});

		await expect(contractH1aadZQ.setApprovalForAll.call(toJprdQX2, approved6m0tnA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpWewSwE = await ERC721.new({from: accounts[5]});
		const tokenIdgoTM7D = BigInt("245")
		const tokenIdTGtfnfZ = BigInt("698")
		const tokenIdypH5G3o = BigInt("980")
		const todPrflsE = accounts[2]
		const fromPatHisK = accounts[4]
		const tokenIddbXWbYY = BigInt("1728")
		const nullmi3I44N = await contractpWewSwE.ownerOf.call(tokenIdgoTM7D, {from: accounts[0]});
		const nullew32ahb = await contractpWewSwE.getApproved.call(tokenIdTGtfnfZ, {from: accounts[4]});
		await contractpWewSwE.safeTransferFrom.call(fromPatHisK, todPrflsE, tokenIdypH5G3o, {from: accounts[4]});
		const nully17rIgS = await contractpWewSwE.ownerOf.call(tokenIddbXWbYY, {from: accounts[0]});

		await expect(contractpWewSwE.ownerOf.call(tokenIdgoTM7D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractiYHYm4N = await ERC721.new({from: accounts[4]});
		const approvedhcXQbf = false
		const topYVHkoN = accounts[0]
		const approvedjBbkDBf = false
		const toNpPnPeb = accounts[1]
		const tokenId1fndWW = BigInt("1183")
		const tokenIdIOUFSM9 = BigInt("1835")
		const toK0i2iSK = accounts[3]
		await contractiYHYm4N.setApprovalForAll.call(topYVHkoN, approvedhcXQbf, {from: accounts[5]});
		await contractiYHYm4N.setApprovalForAll.call(toNpPnPeb, approvedjBbkDBf, {from: accounts[1]});
		const nullSHae0H7 = await contractiYHYm4N.ownerOf.call(tokenId1fndWW, {from: "0x0000000000000000000000000000000000000001"});
		await contractiYHYm4N.approve.call(toK0i2iSK, tokenIdIOUFSM9, {from: accounts[2]});

		await expect(contractiYHYm4N.setApprovalForAll.call(topYVHkoN, approvedhcXQbf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractV4k5AUc = await ERC721.new({from: accounts[2]});
		const tokenIdFPPNmdQ = BigInt("1777")
		const operatorMV6ZrDf = accounts[4]
		const ownerQXmzWQ8 = accounts[1]
		const operatorpNBUvjW = accounts[3]
		const ownerDLLBtEd = accounts[4]
		const nullMWJbvhj = await contractV4k5AUc.getApproved.call(tokenIdFPPNmdQ, {from: accounts[3]});
		const nullApINY5 = await contractV4k5AUc.isApprovedForAll.call(ownerQXmzWQ8, operatorMV6ZrDf, {from: accounts[5]});
		const nullAVxQavG = await contractV4k5AUc.isApprovedForAll.call(ownerDLLBtEd, operatorpNBUvjW, {from: accounts[3]});

		await expect(contractV4k5AUc.getApproved.call(tokenIdFPPNmdQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcHma5jx = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdpM6YchG = BigInt("1216")
		const torTMiKgE = "0x0000000000000000000000000000000000000001"
		const fromhI0jBeW = accounts[0]
		const tokenIdUeoftNo = BigInt("1941")
		const tof5iAqoR = accounts[1]
		const fromTPCTziq = accounts[4]
		await contractcHma5jx.safeTransferFrom.call(fromhI0jBeW, torTMiKgE, tokenIdpM6YchG, {from: accounts[1]});
		await contractcHma5jx.transferFrom.call(fromTPCTziq, tof5iAqoR, tokenIdUeoftNo, {from: "0x0000000000000000000000000000000000000001"});
	});
})