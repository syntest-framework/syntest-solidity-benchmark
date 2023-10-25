const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractUFd0wg0 = await ERC721.new({from: accounts[1]});
		const approvedMIw68ao = false
		const toS4WNsRx = accounts[4]
		const tokenIdKIkGg1I = BigInt("1218")
		await contractUFd0wg0.setApprovalForAll.call(toS4WNsRx, approvedMIw68ao, {from: accounts[3]});
		const nullBivsnUC = await contractUFd0wg0.ownerOf.call(tokenIdKIkGg1I, {from: accounts[3]});

		await expect(contractUFd0wg0.setApprovalForAll.call(toS4WNsRx, approvedMIw68ao, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractNEPTdMt = await ERC721.new({from: accounts[3]});
		const approvedIyi2N93 = true
		const to0fhOF3 = accounts[1]
		const approvedmEOeg3f = false
		const toXlcQHwQ = accounts[1]
		const tokenIdaFch5nz = BigInt("832")
		const toiSlMqiL = "0x0000000000000000000000000000000000000001"
		const operatorJzoFvfz = accounts[1]
		const ownerxqwGsZl = accounts[3]
		const tokenIdSWoE8Bf = BigInt("1600")
		const touBrMziT = accounts[2]
		await contractNEPTdMt.setApprovalForAll.call(to0fhOF3, approvedIyi2N93, {from: accounts[3]});
		await contractNEPTdMt.setApprovalForAll.call(toXlcQHwQ, approvedmEOeg3f, {from: accounts[2]});
		await contractNEPTdMt.approve.call(toiSlMqiL, tokenIdaFch5nz, {from: accounts[4]});
		const nullg4KQMuY = await contractNEPTdMt.isApprovedForAll.call(ownerxqwGsZl, operatorJzoFvfz, {from: accounts[5]});
		await contractNEPTdMt.approve.call(touBrMziT, tokenIdSWoE8Bf, {from: accounts[5]});

		await expect(contractNEPTdMt.setApprovalForAll.call(to0fhOF3, approvedIyi2N93, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCQs5xvp = await ERC721.new({from: accounts[3]});
		const tokenIdy6dJRHc = BigInt("994")
		const toIDWrHt = accounts[2]
		const frommnF1Akc = accounts[4]
		const tokenIdbP9jVYp = BigInt("915")
		const toAzUuWtS = accounts[5]
		const fromjkPJISO = accounts[4]
		const tokenIdzEyueoE = BigInt("1549")
		await contractCQs5xvp.safeTransferFrom.call(frommnF1Akc, toIDWrHt, tokenIdy6dJRHc, {from: accounts[2]});
		await contractCQs5xvp.transferFrom.call(fromjkPJISO, toAzUuWtS, tokenIdbP9jVYp, {from: accounts[4]});
		const nullsPiJB6 = await contractCQs5xvp.getApproved.call(tokenIdzEyueoE, {from: accounts[0]});

		await expect(contractCQs5xvp.safeTransferFrom.call(frommnF1Akc, toIDWrHt, tokenIdy6dJRHc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractn9nBsdr = await ERC721.new({from: accounts[0]});
		const tokenIdJsVlVaP = BigInt("1803")
		const toCDz0cVg = accounts[1]
		const fromS8NXtN = accounts[0]
		const operatorspk0mWk = accounts[1]
		const owneriOa8kOg = accounts[3]
		const ownerPojl9cj = accounts[1]
		const ownerUIe3Nf = accounts[2]
		await contractn9nBsdr.transferFrom.call(fromS8NXtN, toCDz0cVg, tokenIdJsVlVaP, {from: accounts[2]});
		const nullYHrlA7a = await contractn9nBsdr.isApprovedForAll.call(owneriOa8kOg, operatorspk0mWk, {from: accounts[1]});
		const nullYoQtK7B = await contractn9nBsdr.balanceOf.call(ownerPojl9cj, {from: accounts[2]});
		const nullMlg8SRx = await contractn9nBsdr.balanceOf.call(ownerUIe3Nf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractn9nBsdr.transferFrom.call(fromS8NXtN, toCDz0cVg, tokenIdJsVlVaP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMcGzjta = await ERC721.new({from: accounts[3]});
		const approvedRwsZB6P = true
		const toCseRgFD = accounts[2]
		const operatorz95NkH = accounts[5]
		const ownerPrvCWpr = accounts[4]
		const tokenIdhgtszt8 = BigInt("167")
		const approvedVPb4pWa = false
		const toVwF3dxJ = "0x0000000000000000000000000000000000000001"
		await contractMcGzjta.setApprovalForAll.call(toCseRgFD, approvedRwsZB6P, {from: accounts[2]});
		const nullfbwadfI = await contractMcGzjta.isApprovedForAll.call(ownerPrvCWpr, operatorz95NkH, {from: accounts[2]});
		const nullLc57e6 = await contractMcGzjta.getApproved.call(tokenIdhgtszt8, {from: accounts[4]});
		await contractMcGzjta.setApprovalForAll.call(toVwF3dxJ, approvedVPb4pWa, {from: accounts[0]});

		await expect(contractMcGzjta.setApprovalForAll.call(toCseRgFD, approvedRwsZB6P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrFbd13e = await ERC721.new({from: accounts[1]});
		const operator8YpQ47 = accounts[2]
		const ownerLauQvkU = accounts[1]
		const approvedyfVMbqh = false
		const toTlh9JR0 = accounts[4]
		const tokenIdt7nY4Ut = BigInt("1200")
		const nullXKPfLwM = await contractrFbd13e.isApprovedForAll.call(ownerLauQvkU, operator8YpQ47, {from: accounts[1]});
		await contractrFbd13e.setApprovalForAll.call(toTlh9JR0, approvedyfVMbqh, {from: accounts[3]});
		const nullUKVrgf0 = await contractrFbd13e.ownerOf.call(tokenIdt7nY4Ut, {from: accounts[3]});

		assert.equal(nullXKPfLwM, false)
		await expect(contractrFbd13e.setApprovalForAll.call(toTlh9JR0, approvedyfVMbqh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractOrp6Vzl = await ERC721.new({from: accounts[1]});
		const tokenIdzSBZeE = BigInt("1391")
		const approvedeWKua3m = false
		const toNpn4OJl = accounts[5]
		const operatorosLqat = accounts[3]
		const ownerwN16tHG = accounts[2]
		const tokenIdubTZ2q = BigInt("1218")
		const _datahBy0wj = "0x1a12161813161f020c0b0303160e1a0c"
		const tokenIdsYuDJ0B = BigInt("565")
		const toDsPqnV6 = accounts[3]
		const fromrKToNzp = accounts[4]
		const nullh8BNafD = await contractOrp6Vzl.getApproved.call(tokenIdzSBZeE, {from: accounts[0]});
		await contractOrp6Vzl.setApprovalForAll.call(toNpn4OJl, approvedeWKua3m, {from: accounts[3]});
		const nulll4GcSvt = await contractOrp6Vzl.isApprovedForAll.call(ownerwN16tHG, operatorosLqat, {from: "0x0000000000000000000000000000000000000001"});
		const nullMzoQus = await contractOrp6Vzl.ownerOf.call(tokenIdubTZ2q, {from: accounts[3]});
		await contractOrp6Vzl.safeTransferFrom.call(fromrKToNzp, toDsPqnV6, tokenIdsYuDJ0B, _datahBy0wj, {from: accounts[1]});

		await expect(contractOrp6Vzl.getApproved.call(tokenIdzSBZeE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKfx0WmK = await ERC721.new({from: accounts[1]});
		const approvedKuOuwKq = false
		const toZje395w = accounts[4]
		const ownermBsE2uu = accounts[0]
		const tokenIddNEd4JB = BigInt("538")
		const toObsusRU = accounts[2]
		const fromUGbMLs = accounts[1]
		const _dataJhrWH2m = "0x1b01130b061c011d0a0a"
		const tokenIdRhHFmNh = BigInt("371")
		const tovDe9eS = accounts[2]
		const fromFboxIDj = accounts[5]
		const _datalMplNKX = "0x061e021407"
		const tokenIdfxq6nG = BigInt("115")
		const toXOLap0s = accounts[2]
		const from3ZxlKK = accounts[1]
		const _datajfCpXRL = "0x171209190720"
		const tokenIdz2RCCC = BigInt("312")
		const toIWhO85 = accounts[2]
		const fromWbArccK = accounts[1]
		const tokenIdBzRBYy1 = BigInt("365")
		const toEKBddEF = "0x0000000000000000000000000000000000000001"
		const from8m3e4M = accounts[4]
		const tokenIdaa1pddZ = BigInt("1218")
		await contractKfx0WmK.setApprovalForAll.call(toZje395w, approvedKuOuwKq, {from: accounts[3]});
		const nullrW0Zxy9 = await contractKfx0WmK.balanceOf.call(ownermBsE2uu, {from: accounts[4]});
		await contractKfx0WmK.safeTransferFrom.call(fromUGbMLs, toObsusRU, tokenIddNEd4JB, {from: accounts[0]});
		await contractKfx0WmK.safeTransferFrom.call(fromFboxIDj, tovDe9eS, tokenIdRhHFmNh, _dataJhrWH2m, {from: accounts[5]});
		await contractKfx0WmK.safeTransferFrom.call(from3ZxlKK, toXOLap0s, tokenIdfxq6nG, _datalMplNKX, {from: accounts[0]});
		await contractKfx0WmK.safeTransferFrom.call(fromWbArccK, toIWhO85, tokenIdz2RCCC, _datajfCpXRL, {from: accounts[2]});
		await contractKfx0WmK.safeTransferFrom.call(from8m3e4M, toEKBddEF, tokenIdBzRBYy1, {from: accounts[2]});
		const nulllfJj3nN = await contractKfx0WmK.ownerOf.call(tokenIdaa1pddZ, {from: accounts[3]});

		assert.equal(nullrW0Zxy9, 0)
		await expect(contractKfx0WmK.balanceOf.call(ownermBsE2uu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFSlo5Fy = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdJ6rgRnN = BigInt("1350")
		const tokenIdtDkTHZ = BigInt("410")
		const toXiFdZ3 = accounts[0]
		const nullp0H4s1a = await contractFSlo5Fy.getApproved.call(tokenIdJ6rgRnN, {from: accounts[5]});
		await contractFSlo5Fy.approve.call(toXiFdZ3, tokenIdtDkTHZ, {from: accounts[2]});
	});
})