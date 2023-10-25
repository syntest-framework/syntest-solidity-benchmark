const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractPvZ0ot7 = await ERC721.new({from: accounts[0]});
		const tokenIdwAHVFka = BigInt("620")
		const approvedoMB8hB = false
		const tolqOEXXJ = accounts[4]
		const ownerI4JROTg = accounts[4]
		const tokenIdDug8BLN = BigInt("764")
		const tov6I8q4L = accounts[1]
		const approvedp4BIoET = true
		const toWmLCfx = accounts[2]
		const nullTQlO6s = await contractPvZ0ot7.ownerOf.call(tokenIdwAHVFka, {from: accounts[3]});
		await contractPvZ0ot7.setApprovalForAll.call(tolqOEXXJ, approvedoMB8hB, {from: accounts[2]});
		const nullh0WFsEn = await contractPvZ0ot7.balanceOf.call(ownerI4JROTg, {from: accounts[1]});
		await contractPvZ0ot7.approve.call(tov6I8q4L, tokenIdDug8BLN, {from: accounts[2]});
		await contractPvZ0ot7.setApprovalForAll.call(toWmLCfx, approvedp4BIoET, {from: accounts[0]});

		await expect(contractPvZ0ot7.ownerOf.call(tokenIdwAHVFka, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractHKVXO6 = await ERC721.new({from: accounts[5]});
		const tokenIdpklepOL = BigInt("190")
		const toe5a5Yca = "0x0000000000000000000000000000000000000001"
		const tokenIdTlBRE42 = BigInt("141")
		const toaKQ7dSk = accounts[4]
		const frompKHsCmf = accounts[1]
		const approvedOcThf7B = false
		const tomrClp8R = accounts[4]
		const tokenIdoPt53AP = BigInt("1547")
		const tocZqJ6Du = accounts[1]
		const fromDswhnJk = "0x0000000000000000000000000000000000000001"
		const approvedrfbQ4q = true
		const tojSXEkQX = accounts[3]
		await contractHKVXO6.approve.call(toe5a5Yca, tokenIdpklepOL, {from: accounts[5]});
		await contractHKVXO6.transferFrom.call(frompKHsCmf, toaKQ7dSk, tokenIdTlBRE42, {from: accounts[1]});
		await contractHKVXO6.setApprovalForAll.call(tomrClp8R, approvedOcThf7B, {from: accounts[3]});
		await contractHKVXO6.safeTransferFrom.call(fromDswhnJk, tocZqJ6Du, tokenIdoPt53AP, {from: "0x0000000000000000000000000000000000000001"});
		await contractHKVXO6.setApprovalForAll.call(tojSXEkQX, approvedrfbQ4q, {from: accounts[3]});

		await expect(contractHKVXO6.approve.call(toe5a5Yca, tokenIdpklepOL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractwfbK3Mq = await ERC721.new({from: accounts[4]});
		const tokenIdad0Xn7E = BigInt("1475")
		const tonylptXI = accounts[5]
		const fromQObiTB0 = accounts[5]
		const tokenIdmIhW1BO = BigInt("1144")
		const toeNclNv = accounts[4]
		const fromC3QpRHU = "0x0000000000000000000000000000000000000001"
		const approvedn2vKEBt = true
		const toAivhqv0 = accounts[0]
		const tokenIdTDalRY = BigInt("241")
		const tou7PeSLO = "0x0000000000000000000000000000000000000001"
		const fromaigv4u = accounts[1]
		const tokenIdzJnCeKp = BigInt("1921")
		await contractwfbK3Mq.safeTransferFrom.call(fromQObiTB0, tonylptXI, tokenIdad0Xn7E, {from: "0x0000000000000000000000000000000000000001"});
		await contractwfbK3Mq.safeTransferFrom.call(fromC3QpRHU, toeNclNv, tokenIdmIhW1BO, {from: accounts[5]});
		await contractwfbK3Mq.setApprovalForAll.call(toAivhqv0, approvedn2vKEBt, {from: accounts[3]});
		await contractwfbK3Mq.safeTransferFrom.call(fromaigv4u, tou7PeSLO, tokenIdTDalRY, {from: accounts[2]});
		const nullkfNjFD = await contractwfbK3Mq.ownerOf.call(tokenIdzJnCeKp, {from: accounts[2]});

		await expect(contractwfbK3Mq.safeTransferFrom.call(fromQObiTB0, tonylptXI, tokenIdad0Xn7E, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFr5etxw = await ERC721.new({from: accounts[4]});
		const approvedDRbor5N = false
		const toYdm4BmJ = accounts[3]
		const tokenIdLIsrxuU = BigInt("1611")
		const toOA3vcel = accounts[4]
		const fromoK6QJkU = accounts[2]
		const operatorUHCdteY = accounts[3]
		const ownerDQC2EkZ = accounts[0]
		const tokenIdjg2AZ3 = BigInt("2020")
		await contractFr5etxw.setApprovalForAll.call(toYdm4BmJ, approvedDRbor5N, {from: accounts[0]});
		await contractFr5etxw.safeTransferFrom.call(fromoK6QJkU, toOA3vcel, tokenIdLIsrxuU, {from: accounts[1]});
		const nullRMOVsLU = await contractFr5etxw.isApprovedForAll.call(ownerDQC2EkZ, operatorUHCdteY, {from: accounts[4]});
		const nullyoloAHJ = await contractFr5etxw.getApproved.call(tokenIdjg2AZ3, {from: accounts[2]});

		await expect(contractFr5etxw.setApprovalForAll.call(toYdm4BmJ, approvedDRbor5N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractijauGod = await ERC721.new({from: accounts[3]});
		const ownerbITfkXK = accounts[0]
		const tokenIdzkWd84Z = BigInt("1136")
		const toh1qMhnd = accounts[3]
		const fromS9TRLJ = accounts[2]
		const approvedtniPSBg = true
		const tolIExjXr = accounts[1]
		const nullIBkVmmW = await contractijauGod.balanceOf.call(ownerbITfkXK, {from: accounts[2]});
		await contractijauGod.safeTransferFrom.call(fromS9TRLJ, toh1qMhnd, tokenIdzkWd84Z, {from: accounts[0]});
		await contractijauGod.setApprovalForAll.call(tolIExjXr, approvedtniPSBg, {from: accounts[3]});

		assert.equal(nullIBkVmmW, 0)
		await expect(contractijauGod.safeTransferFrom.call(fromS9TRLJ, toh1qMhnd, tokenIdzkWd84Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrVQkfdR = await ERC721.new({from: accounts[1]});
		const approvednaqqQhz = true
		const toMdhG2HP = accounts[3]
		const operatorJciad3 = "0x0000000000000000000000000000000000000001"
		const ownerUyc5rSz = accounts[3]
		const approvedpNXRhwU = false
		const towsbvMof = accounts[1]
		await contractrVQkfdR.setApprovalForAll.call(toMdhG2HP, approvednaqqQhz, {from: accounts[4]});
		const nullEdX7iU = await contractrVQkfdR.isApprovedForAll.call(ownerUyc5rSz, operatorJciad3, {from: accounts[0]});
		await contractrVQkfdR.setApprovalForAll.call(towsbvMof, approvedpNXRhwU, {from: accounts[0]});

		assert.equal(nullEdX7iU, false)
	});

	it('test for ERC721', async () => {
		const contractmwRH6eJ = await ERC721.new({from: accounts[0]});
		const tokenIdzOl9hEc = BigInt("1578")
		const toHpCHBdO = accounts[4]
		const fromiiQHf0 = accounts[1]
		const operatorYQBGBhr = accounts[0]
		const ownerAk8dmJa = accounts[3]
		const tokenIdX0qjfI = BigInt("1754")
		const todc0eP9E = accounts[0]
		const tokenIdp7ba55f = BigInt("1035")
		const tokenIdIOuFQVB = BigInt("1157")
		const _dataz1UErlH = "0x120f0c0c0b2006080a02001b1e18041d1f0718061409051b1512"
		const tokenIdz4DDKrz = BigInt("1850")
		const toLZtFJD9 = accounts[1]
		const fromNirihzt = accounts[4]
		await contractmwRH6eJ.transferFrom.call(fromiiQHf0, toHpCHBdO, tokenIdzOl9hEc, {from: accounts[0]});
		const nullTtJJDaD = await contractmwRH6eJ.isApprovedForAll.call(ownerAk8dmJa, operatorYQBGBhr, {from: accounts[0]});
		await contractmwRH6eJ.approve.call(todc0eP9E, tokenIdX0qjfI, {from: accounts[2]});
		const nullitBQuQ3 = await contractmwRH6eJ.ownerOf.call(tokenIdp7ba55f, {from: accounts[4]});
		const nulll55mRRO = await contractmwRH6eJ.getApproved.call(tokenIdIOuFQVB, {from: accounts[2]});
		await contractmwRH6eJ.safeTransferFrom.call(fromNirihzt, toLZtFJD9, tokenIdz4DDKrz, _dataz1UErlH, {from: accounts[5]});

		await expect(contractmwRH6eJ.transferFrom.call(fromiiQHf0, toHpCHBdO, tokenIdzOl9hEc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxnkH25 = await ERC721.new({from: accounts[3]});
		const tokenIdAIjXPLx = BigInt("363")
		const tokenIdWOHuN5K = BigInt("1471")
		const tokGmIq2h = accounts[2]
		const fromEKnT995 = accounts[4]
		const tokenIdDpNmxlN = BigInt("103")
		const nullDmZrmS6 = await contractxnkH25.getApproved.call(tokenIdAIjXPLx, {from: accounts[4]});
		await contractxnkH25.safeTransferFrom.call(fromEKnT995, tokGmIq2h, tokenIdWOHuN5K, {from: accounts[4]});
		const nullVdrCicx = await contractxnkH25.ownerOf.call(tokenIdDpNmxlN, {from: accounts[0]});

		await expect(contractxnkH25.getApproved.call(tokenIdAIjXPLx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbij1Aqh = await ERC721.new({from: accounts[0]});
		const approvedueSkcMg = true
		const totkQ6dP = "0x0000000000000000000000000000000000000001"
		const tokenIdxaBaGKm = BigInt("765")
		const tofCykzI2 = accounts[4]
		await contractbij1Aqh.setApprovalForAll.call(totkQ6dP, approvedueSkcMg, {from: "0x0000000000000000000000000000000000000001"});
		await contractbij1Aqh.approve.call(tofCykzI2, tokenIdxaBaGKm, {from: accounts[0]});

		await expect(contractbij1Aqh.setApprovalForAll.call(totkQ6dP, approvedueSkcMg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractnGKj4rh = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdH53CIuu = BigInt("1264")
		const toQPX6nf = accounts[3]
		const tokenIdfMmOZWt = BigInt("1880")
		const tokenIdNAgEpVf = BigInt("461")
		const toPr3ppiO = accounts[5]
		const fromdCqdLBl = accounts[5]
		const tokenIdfEXIHPR = BigInt("1206")
		const to58lzZD = accounts[0]
		const from4bUslk = accounts[1]
		await contractnGKj4rh.approve.call(toQPX6nf, tokenIdH53CIuu, {from: accounts[3]});
		const nullMTh3P9C = await contractnGKj4rh.getApproved.call(tokenIdfMmOZWt, {from: "0x0000000000000000000000000000000000000001"});
		await contractnGKj4rh.transferFrom.call(fromdCqdLBl, toPr3ppiO, tokenIdNAgEpVf, {from: accounts[2]});
		await contractnGKj4rh.transferFrom.call(from4bUslk, to58lzZD, tokenIdfEXIHPR, {from: accounts[4]});
	});
})