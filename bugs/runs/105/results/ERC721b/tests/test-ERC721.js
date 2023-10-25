const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractpPSeO4O = await ERC721.new({from: accounts[5]});
		const tokenIdjBtv7Sd = BigInt("514")
		const toP0D3v6v = accounts[2]
		const tokenIdXh8Hd0 = BigInt("1791")
		const toRXniN5V = accounts[3]
		const fromfuzQ7Ip = accounts[2]
		const tokenIdPyTB31 = BigInt("892")
		const toCwdMXRn = accounts[2]
		const fromDcJtd11 = accounts[2]
		const _dataylyhR6j = "0x0a13091f09161610"
		const tokenIdAs8Pprj = BigInt("355")
		const toT1slPtf = accounts[0]
		const fromo3WvZQe = accounts[4]
		await contractpPSeO4O.approve.call(toP0D3v6v, tokenIdjBtv7Sd, {from: accounts[2]});
		await contractpPSeO4O.transferFrom.call(fromfuzQ7Ip, toRXniN5V, tokenIdXh8Hd0, {from: "0x0000000000000000000000000000000000000001"});
		await contractpPSeO4O.transferFrom.call(fromDcJtd11, toCwdMXRn, tokenIdPyTB31, {from: accounts[1]});
		await contractpPSeO4O.safeTransferFrom.call(fromo3WvZQe, toT1slPtf, tokenIdAs8Pprj, _dataylyhR6j, {from: accounts[0]});

		await expect(contractpPSeO4O.approve.call(toP0D3v6v, tokenIdjBtv7Sd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractNBZtjqD = await ERC721.new({from: accounts[0]});
		const tokenIdAIoK5Vv = BigInt("199")
		const torOyawW = accounts[3]
		const frommvzEZ3x = accounts[5]
		const tokenIdizLicFa = BigInt("1776")
		const tooPz5x8q = accounts[1]
		const operatoryOTYr8B = accounts[2]
		const ownergqyF2Ni = accounts[3]
		await contractNBZtjqD.transferFrom.call(frommvzEZ3x, torOyawW, tokenIdAIoK5Vv, {from: "0x0000000000000000000000000000000000000001"});
		await contractNBZtjqD.approve.call(tooPz5x8q, tokenIdizLicFa, {from: accounts[0]});
		const nullwq9o3yi = await contractNBZtjqD.isApprovedForAll.call(ownergqyF2Ni, operatoryOTYr8B, {from: accounts[4]});

		await expect(contractNBZtjqD.transferFrom.call(frommvzEZ3x, torOyawW, tokenIdAIoK5Vv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracth8FV3PS = await ERC721.new({from: accounts[1]});
		const tokenIdaGG3cmw = BigInt("1198")
		const ownerfsviDUi = accounts[0]
		const approvedcUZHGFt = false
		const toqrvM69E = accounts[3]
		const nullHKOFAPX = await contracth8FV3PS.getApproved.call(tokenIdaGG3cmw, {from: accounts[4]});
		const nullvkdHZwY = await contracth8FV3PS.balanceOf.call(ownerfsviDUi, {from: accounts[2]});
		await contracth8FV3PS.setApprovalForAll.call(toqrvM69E, approvedcUZHGFt, {from: accounts[2]});

		await expect(contracth8FV3PS.getApproved.call(tokenIdaGG3cmw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxNeQTD4 = await ERC721.new({from: accounts[1]});
		const _datas9v1flo = "0x0e040d0b1803020603010201060518050e1010091b1605"
		const tokenIdy0HjvwW = BigInt("1694")
		const tovv5tSR = accounts[5]
		const fromkasQzQT = accounts[4]
		const tokenIdHCStiGp = BigInt("979")
		const toGwtZCy = accounts[3]
		const fromDKX8468 = accounts[3]
		await contractxNeQTD4.safeTransferFrom.call(fromkasQzQT, tovv5tSR, tokenIdy0HjvwW, _datas9v1flo, {from: accounts[3]});
		await contractxNeQTD4.transferFrom.call(fromDKX8468, toGwtZCy, tokenIdHCStiGp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractxNeQTD4.safeTransferFrom.call(fromkasQzQT, tovv5tSR, tokenIdy0HjvwW, _datas9v1flo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFOwtpp = await ERC721.new({from: accounts[1]});
		const operatorKUT4GSI = accounts[4]
		const ownerHc2q1hM = accounts[5]
		const approvedZY0cNIW = false
		const toxHJlZOM = accounts[0]
		const nullX8dt77N = await contractFOwtpp.isApprovedForAll.call(ownerHc2q1hM, operatorKUT4GSI, {from: accounts[2]});
		await contractFOwtpp.setApprovalForAll.call(toxHJlZOM, approvedZY0cNIW, {from: accounts[3]});

		assert.equal(nullX8dt77N, false)
	});

	it('test for ERC721', async () => {
		const contractEpcuUDW = await ERC721.new({from: accounts[1]});
		const tokenIdBEVNCiJ = BigInt("867")
		const tobKrYnW = accounts[5]
		const fromwCsPzQL = accounts[5]
		const tokenIdLQe8fV0 = BigInt("979")
		const toss27Jzw = accounts[4]
		const fromyINWBag = accounts[3]
		await contractEpcuUDW.safeTransferFrom.call(fromwCsPzQL, tobKrYnW, tokenIdBEVNCiJ, {from: accounts[0]});
		await contractEpcuUDW.transferFrom.call(fromyINWBag, toss27Jzw, tokenIdLQe8fV0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractEpcuUDW.safeTransferFrom.call(fromwCsPzQL, tobKrYnW, tokenIdBEVNCiJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractzm7sGqb = await ERC721.new({from: accounts[1]});
		const ownergnKSE88 = accounts[5]
		const _datahk4mPf = "0x17120d0a01091f181c14110e0a0f0c181007110f"
		const tokenIdTqZUiX3 = BigInt("1161")
		const tohkf8i7 = accounts[2]
		const fromunmZnMS = "0x0000000000000000000000000000000000000001"
		const tokenIdqWKiV34 = BigInt("979")
		const toXBPih3H = accounts[3]
		const fromSvclRCj = accounts[3]
		const nullOi7nMAY = await contractzm7sGqb.balanceOf.call(ownergnKSE88, {from: accounts[2]});
		await contractzm7sGqb.safeTransferFrom.call(fromunmZnMS, tohkf8i7, tokenIdTqZUiX3, _datahk4mPf, {from: accounts[3]});
		await contractzm7sGqb.transferFrom.call(fromSvclRCj, toXBPih3H, tokenIdqWKiV34, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullOi7nMAY, 0)
		await expect(contractzm7sGqb.safeTransferFrom.call(fromunmZnMS, tohkf8i7, tokenIdTqZUiX3, _datahk4mPf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfi6GzuA = await ERC721.new({from: accounts[1]});
		const approvedBtJuspi = false
		const toDzoZD6i = accounts[3]
		const tokenIdQHepIQs = BigInt("692")
		const tolzz2iU = accounts[0]
		const fromFdc0tNq = "0x0000000000000000000000000000000000000001"
		const tokenIdF8BJDU5 = BigInt("1033")
		const tokenIdCkcPr3Q = BigInt("979")
		const toctM3kRE = accounts[4]
		const fromMlo7312 = accounts[3]
		await contractfi6GzuA.setApprovalForAll.call(toDzoZD6i, approvedBtJuspi, {from: accounts[3]});
		await contractfi6GzuA.safeTransferFrom.call(fromFdc0tNq, tolzz2iU, tokenIdQHepIQs, {from: accounts[0]});
		const nulliJgHdU = await contractfi6GzuA.getApproved.call(tokenIdF8BJDU5, {from: accounts[0]});
		await contractfi6GzuA.transferFrom.call(fromMlo7312, toctM3kRE, tokenIdCkcPr3Q, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractfi6GzuA.setApprovalForAll.call(toDzoZD6i, approvedBtJuspi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractvxkEor = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdBGlbK2 = BigInt("96")
		const toRNNJqWR = accounts[0]
		const fromUYEVYo = accounts[1]
		const tokenIdumYg7Rj = BigInt("29")
		const tokenIdvtAknxs = BigInt("410")
		const tocKce0jC = accounts[4]
		const tokenIdmzUewaD = BigInt("1772")
		const tonStnW27 = accounts[1]
		const fromTFH021f = accounts[1]
		const approvedZuT9kid = false
		const toxJvakp4 = accounts[4]
		const tokenIdqmItzFl = BigInt("402")
		const toZza60oh = accounts[2]
		const fromzu8GLUc = "0x0000000000000000000000000000000000000001"
		await contractvxkEor.safeTransferFrom.call(fromUYEVYo, toRNNJqWR, tokenIdBGlbK2, {from: "0x0000000000000000000000000000000000000001"});
		const nullG0oTFHf = await contractvxkEor.getApproved.call(tokenIdumYg7Rj, {from: accounts[1]});
		await contractvxkEor.approve.call(tocKce0jC, tokenIdvtAknxs, {from: accounts[2]});
		await contractvxkEor.safeTransferFrom.call(fromTFH021f, tonStnW27, tokenIdmzUewaD, {from: accounts[1]});
		await contractvxkEor.setApprovalForAll.call(toxJvakp4, approvedZuT9kid, {from: accounts[0]});
		await contractvxkEor.transferFrom.call(fromzu8GLUc, toZza60oh, tokenIdqmItzFl, {from: accounts[3]});
	});
})