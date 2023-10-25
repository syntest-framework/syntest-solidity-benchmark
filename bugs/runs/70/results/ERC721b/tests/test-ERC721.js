const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractUYwP3OD = await ERC721.new({from: accounts[0]});
		const approvedOOeek3v = false
		const toMoH7qUG = accounts[0]
		const approvedJM4Zjn = false
		const towV8AMBr = accounts[0]
		await contractUYwP3OD.setApprovalForAll.call(toMoH7qUG, approvedOOeek3v, {from: accounts[5]});
		await contractUYwP3OD.setApprovalForAll.call(towV8AMBr, approvedJM4Zjn, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractaJhH6Qv = await ERC721.new({from: accounts[4]});
		const tokenIdKQMdmoa = BigInt("1878")
		const toaKL39lX = "0x0000000000000000000000000000000000000001"
		const fromOUTMQZQ = accounts[4]
		const _dataEycwrON = "0x05171d061c190601101f090c1b011b141c14081618"
		const tokenIdXlOOez9 = BigInt("408")
		const tomlzXqSk = accounts[0]
		const frombkaNRXL = accounts[5]
		const tokenIdb8J0zGm = BigInt("615")
		await contractaJhH6Qv.transferFrom.call(fromOUTMQZQ, toaKL39lX, tokenIdKQMdmoa, {from: accounts[1]});
		await contractaJhH6Qv.safeTransferFrom.call(frombkaNRXL, tomlzXqSk, tokenIdXlOOez9, _dataEycwrON, {from: accounts[3]});
		const nulllUky3Oz = await contractaJhH6Qv.getApproved.call(tokenIdb8J0zGm, {from: accounts[0]});

		await expect(contractaJhH6Qv.transferFrom.call(fromOUTMQZQ, toaKL39lX, tokenIdKQMdmoa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMvVLbSb = await ERC721.new({from: accounts[1]});
		const operatoroqzRNMo = accounts[4]
		const ownermXw3HT = accounts[2]
		const tokenIdSi74Yvl = BigInt("1601")
		const toAEGhXRD = accounts[3]
		const nullgZptxJ6 = await contractMvVLbSb.isApprovedForAll.call(ownermXw3HT, operatoroqzRNMo, {from: accounts[4]});
		await contractMvVLbSb.approve.call(toAEGhXRD, tokenIdSi74Yvl, {from: accounts[4]});

		assert.equal(nullgZptxJ6, false)
		await expect(contractMvVLbSb.approve.call(toAEGhXRD, tokenIdSi74Yvl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZ6K8hy0 = await ERC721.new({from: accounts[0]});
		const tokenIdk0llt1d = BigInt("700")
		const toMK8zzPO = accounts[4]
		const fromFwCTJBZ = accounts[4]
		const operatorR43JZ8w = accounts[3]
		const ownerbbOCavE = accounts[0]
		const operatorCPoaSG = accounts[3]
		const ownerm96anpk = accounts[4]
		await contractZ6K8hy0.safeTransferFrom.call(fromFwCTJBZ, toMK8zzPO, tokenIdk0llt1d, {from: "0x0000000000000000000000000000000000000001"});
		const nullfZzUvix = await contractZ6K8hy0.isApprovedForAll.call(ownerbbOCavE, operatorR43JZ8w, {from: accounts[2]});
		const nullVNcXY4r = await contractZ6K8hy0.isApprovedForAll.call(ownerm96anpk, operatorCPoaSG, {from: accounts[2]});

		await expect(contractZ6K8hy0.safeTransferFrom.call(fromFwCTJBZ, toMK8zzPO, tokenIdk0llt1d, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMhRs8Bm = await ERC721.new({from: accounts[1]});
		const operatoru3JbAsE = accounts[4]
		const ownerll8QvRx = accounts[2]
		const approvedEtiBO1j = true
		const tovW62Rjx = accounts[0]
		const tokenIddEsKqJ = BigInt("1601")
		const toz7bcjF1 = accounts[3]
		const nulldYDpoiM = await contractMhRs8Bm.isApprovedForAll.call(ownerll8QvRx, operatoru3JbAsE, {from: accounts[4]});
		await contractMhRs8Bm.setApprovalForAll.call(tovW62Rjx, approvedEtiBO1j, {from: accounts[0]});
		await contractMhRs8Bm.approve.call(toz7bcjF1, tokenIddEsKqJ, {from: accounts[4]});

		assert.equal(nulldYDpoiM, false)
		await expect(contractMhRs8Bm.setApprovalForAll.call(tovW62Rjx, approvedEtiBO1j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWf5hwOi = await ERC721.new({from: accounts[4]});
		const tokenIdGndJhGo = BigInt("1179")
		const ownerT3Hs7hg = accounts[2]
		const approvedzQXzlr6 = true
		const toURatZar = accounts[4]
		const tokenIdow18jDK = BigInt("1838")
		const tolIWRPKi = accounts[0]
		const frommjVakH = accounts[3]
		const operatortdW83T3 = accounts[0]
		const ownerMCt464a = accounts[4]
		const nullp1HNOru = await contractWf5hwOi.getApproved.call(tokenIdGndJhGo, {from: accounts[3]});
		const nullnwfeI0b = await contractWf5hwOi.balanceOf.call(ownerT3Hs7hg, {from: accounts[4]});
		await contractWf5hwOi.setApprovalForAll.call(toURatZar, approvedzQXzlr6, {from: accounts[4]});
		await contractWf5hwOi.safeTransferFrom.call(frommjVakH, tolIWRPKi, tokenIdow18jDK, {from: accounts[1]});
		const nulltK7D0kD = await contractWf5hwOi.isApprovedForAll.call(ownerMCt464a, operatortdW83T3, {from: accounts[1]});

		await expect(contractWf5hwOi.getApproved.call(tokenIdGndJhGo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracte6VFmpT = await ERC721.new({from: accounts[4]});
		const ownerOauarz = accounts[2]
		const tokenIdrDT3plo = BigInt("1674")
		const toZb3mCF = accounts[5]
		const fromkBMQ8Z5 = accounts[4]
		const tokenIdvZmu2rp = BigInt("751")
		const tom7tHJ84 = accounts[1]
		const fromOpagSNx = accounts[0]
		const tokenIdNt46whc = BigInt("192")
		const torqycNWZ = accounts[1]
		const fromAKV8yZA = accounts[3]
		const tokenIdyXJrHnt = BigInt("1688")
		const tocxQPX4f = accounts[5]
		const ownersW5X4ou = accounts[1]
		const tokenIdYzS66z = BigInt("1283")
		const tokenIdoYEWpYZ = BigInt("154")
		const tojIcMPUr = accounts[0]
		const fromzIA13b0 = accounts[1]
		const nullQBqEaHv = await contracte6VFmpT.balanceOf.call(ownerOauarz, {from: accounts[3]});
		await contracte6VFmpT.safeTransferFrom.call(fromkBMQ8Z5, toZb3mCF, tokenIdrDT3plo, {from: accounts[3]});
		await contracte6VFmpT.safeTransferFrom.call(fromOpagSNx, tom7tHJ84, tokenIdvZmu2rp, {from: accounts[4]});
		await contracte6VFmpT.transferFrom.call(fromAKV8yZA, torqycNWZ, tokenIdNt46whc, {from: accounts[3]});
		await contracte6VFmpT.approve.call(tocxQPX4f, tokenIdyXJrHnt, {from: "0x0000000000000000000000000000000000000001"});
		const nullOAmLHOU = await contracte6VFmpT.balanceOf.call(ownersW5X4ou, {from: "0x0000000000000000000000000000000000000001"});
		const nullbP4bn11 = await contracte6VFmpT.ownerOf.call(tokenIdYzS66z, {from: accounts[5]});
		await contracte6VFmpT.safeTransferFrom.call(fromzIA13b0, tojIcMPUr, tokenIdoYEWpYZ, {from: accounts[0]});

		assert.equal(nullQBqEaHv, 0)
		await expect(contracte6VFmpT.safeTransferFrom.call(fromkBMQ8Z5, toZb3mCF, tokenIdrDT3plo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractSvp8Qd = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdHJrxC5K = BigInt("1655")
		const tobiNXSWh = accounts[1]
		const fromtv9i3Ud = accounts[4]
		const tokenIdNDxLOP = BigInt("301")
		const tovJSOKc5 = accounts[5]
		const fromffZrCjM = accounts[3]
		const tokenIdO2NrWSK = BigInt("837")
		const tojfCF14a = accounts[0]
		const from1iBLj3 = accounts[0]
		const tokenIdza5us5Y = BigInt("1911")
		const toAdVV86s = accounts[5]
		const fromsNEHgai = accounts[0]
		await contractSvp8Qd.transferFrom.call(fromtv9i3Ud, tobiNXSWh, tokenIdHJrxC5K, {from: accounts[3]});
		await contractSvp8Qd.transferFrom.call(fromffZrCjM, tovJSOKc5, tokenIdNDxLOP, {from: accounts[2]});
		await contractSvp8Qd.safeTransferFrom.call(from1iBLj3, tojfCF14a, tokenIdO2NrWSK, {from: accounts[4]});
		await contractSvp8Qd.transferFrom.call(fromsNEHgai, toAdVV86s, tokenIdza5us5Y, {from: accounts[3]});
	});
})