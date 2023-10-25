const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractCF9xJyQ = await ERC721.new({from: accounts[4]});
		const tokenIdlw9DUOO = BigInt("515")
		const toY0knlNS = accounts[4]
		const tokenIdbdlRXuj = BigInt("1432")
		const toKjoYnc8 = accounts[2]
		const from3dBcEv = accounts[3]
		const tokenIdOiKIQUd = BigInt("454")
		const toq7mGD3r = accounts[0]
		await contractCF9xJyQ.approve.call(toY0knlNS, tokenIdlw9DUOO, {from: accounts[3]});
		await contractCF9xJyQ.safeTransferFrom.call(from3dBcEv, toKjoYnc8, tokenIdbdlRXuj, {from: accounts[3]});
		await contractCF9xJyQ.approve.call(toq7mGD3r, tokenIdOiKIQUd, {from: accounts[4]});

		await expect(contractCF9xJyQ.approve.call(toY0knlNS, tokenIdlw9DUOO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDh4kN3 = await ERC721.new({from: accounts[4]});
		const tokenIdAEylbGh = BigInt("765")
		const toNM3cLKP = accounts[3]
		const fromn6RlYGC = accounts[2]
		const tokenIdOgCx2nb = BigInt("884")
		await contractDh4kN3.transferFrom.call(fromn6RlYGC, toNM3cLKP, tokenIdAEylbGh, {from: accounts[2]});
		const nullymSr57B = await contractDh4kN3.getApproved.call(tokenIdOgCx2nb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractDh4kN3.transferFrom.call(fromn6RlYGC, toNM3cLKP, tokenIdAEylbGh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpe3XZvc = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdIfytW9O = BigInt("1760")
		const toe3Vj8Jc = accounts[5]
		const operatorOeaADee = accounts[1]
		const ownertK9IFmC = accounts[4]
		const _dataRc4ZFGa = "0x130c0e0800040d09150d01011a0119111c0d1e01111f"
		const tokenIdbe0QcYS = BigInt("1118")
		const toRO1TcjM = accounts[2]
		const fromiOBhdtb = accounts[4]
		const _dataExcf0pd = "0x0d071707121d011419061214030c08141e090e"
		const tokenIdVDK1Qy = BigInt("957")
		const toCniUYQE = accounts[3]
		const fromswpKtox = accounts[0]
		const tokenIdgX0m4Hf = BigInt("66")
		const toT1nd0Y = accounts[1]
		const fromf2Jgz4T = accounts[3]
		await contractpe3XZvc.approve.call(toe3Vj8Jc, tokenIdIfytW9O, {from: accounts[4]});
		const nullrL7qtFq = await contractpe3XZvc.isApprovedForAll.call(ownertK9IFmC, operatorOeaADee, {from: accounts[2]});
		await contractpe3XZvc.safeTransferFrom.call(fromiOBhdtb, toRO1TcjM, tokenIdbe0QcYS, _dataRc4ZFGa, {from: accounts[0]});
		await contractpe3XZvc.safeTransferFrom.call(fromswpKtox, toCniUYQE, tokenIdVDK1Qy, _dataExcf0pd, {from: accounts[2]});
		await contractpe3XZvc.transferFrom.call(fromf2Jgz4T, toT1nd0Y, tokenIdgX0m4Hf, {from: accounts[5]});
	});

	it('test for ERC721', async () => {
		const contractqpZLbm = await ERC721.new({from: accounts[4]});
		const approvedOmMkZAm = true
		const torfJmglV = accounts[1]
		const tokenIdHeW677s = BigInt("1461")
		const tokenIdZsOWUu2 = BigInt("773")
		const toKvCBlQd = accounts[0]
		const fromuns0LYw = accounts[5]
		const approvedUodyGwV = true
		const toFa19Y15 = accounts[4]
		const tokenIdsPYYQ6f = BigInt("512")
		const tokenIdmGtBuRR = BigInt("1764")
		await contractqpZLbm.setApprovalForAll.call(torfJmglV, approvedOmMkZAm, {from: accounts[0]});
		const nullhHc02wW = await contractqpZLbm.ownerOf.call(tokenIdHeW677s, {from: accounts[1]});
		await contractqpZLbm.safeTransferFrom.call(fromuns0LYw, toKvCBlQd, tokenIdZsOWUu2, {from: accounts[4]});
		await contractqpZLbm.setApprovalForAll.call(toFa19Y15, approvedUodyGwV, {from: accounts[4]});
		const nullN7DF4Jv = await contractqpZLbm.ownerOf.call(tokenIdsPYYQ6f, {from: accounts[1]});
		const nullwGygLYl = await contractqpZLbm.getApproved.call(tokenIdmGtBuRR, {from: accounts[5]});

		await expect(contractqpZLbm.setApprovalForAll.call(torfJmglV, approvedOmMkZAm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractkuotG0I = await ERC721.new({from: accounts[0]});
		const ownerTfwMaIJ = accounts[4]
		const approvedIT7GvhM = true
		const tofFc586y = accounts[2]
		const nullUNnBETr = await contractkuotG0I.balanceOf.call(ownerTfwMaIJ, {from: accounts[2]});
		await contractkuotG0I.setApprovalForAll.call(tofFc586y, approvedIT7GvhM, {from: accounts[0]});

		assert.equal(nullUNnBETr, 0)
	});

	it('test for ERC721', async () => {
		const contractFzVtQ6K = await ERC721.new({from: accounts[2]});
		const tokenIdZVTCCx0 = BigInt("1196")
		const _dataiIiCHo = "0x0b05140316101618050b0d01"
		const tokenIdvo1eVT = BigInt("1112")
		const toxxpL6It = "0x0000000000000000000000000000000000000001"
		const fromtt1axV = accounts[2]
		const tokenIdvHIKqoC = BigInt("484")
		const tokenIdIl5Z1qM = BigInt("281")
		const tol8uGSfI = accounts[3]
		const fromVBSyAYt = accounts[0]
		const operatorRnIIIat = accounts[3]
		const ownerMK1Ceve = accounts[3]
		const operatorDvEjqo3 = accounts[4]
		const ownerjYF3Kij = accounts[0]
		const nullIEYuAK4 = await contractFzVtQ6K.getApproved.call(tokenIdZVTCCx0, {from: accounts[1]});
		await contractFzVtQ6K.safeTransferFrom.call(fromtt1axV, toxxpL6It, tokenIdvo1eVT, _dataiIiCHo, {from: accounts[4]});
		const nully7wdJjf = await contractFzVtQ6K.ownerOf.call(tokenIdvHIKqoC, {from: accounts[2]});
		await contractFzVtQ6K.transferFrom.call(fromVBSyAYt, tol8uGSfI, tokenIdIl5Z1qM, {from: accounts[1]});
		const nullNtfiZs8 = await contractFzVtQ6K.isApprovedForAll.call(ownerMK1Ceve, operatorRnIIIat, {from: accounts[1]});
		const nulliuaTd5q = await contractFzVtQ6K.isApprovedForAll.call(ownerjYF3Kij, operatorDvEjqo3, {from: accounts[0]});

		await expect(contractFzVtQ6K.getApproved.call(tokenIdZVTCCx0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgGTP47i = await ERC721.new({from: accounts[5]});
		const approvedKQAyLFH = false
		const toHlebK2m = accounts[1]
		const tokenIdDJcZEkL = BigInt("92")
		const tod9FC4EB = accounts[3]
		const fromSiBBn95 = accounts[1]
		const tokenIdTEpuB65 = BigInt("1173")
		const toYjckn4s = accounts[2]
		const approvedH4XhwN = true
		const toYYVZGu1 = accounts[5]
		const tokenIdkbEE8y9 = BigInt("983")
		const tobuuh0JB = accounts[0]
		const fromZ4nk3oD = accounts[4]
		await contractgGTP47i.setApprovalForAll.call(toHlebK2m, approvedKQAyLFH, {from: accounts[4]});
		await contractgGTP47i.safeTransferFrom.call(fromSiBBn95, tod9FC4EB, tokenIdDJcZEkL, {from: accounts[2]});
		await contractgGTP47i.approve.call(toYjckn4s, tokenIdTEpuB65, {from: accounts[5]});
		await contractgGTP47i.setApprovalForAll.call(toYYVZGu1, approvedH4XhwN, {from: "0x0000000000000000000000000000000000000001"});
		await contractgGTP47i.transferFrom.call(fromZ4nk3oD, tobuuh0JB, tokenIdkbEE8y9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractgGTP47i.setApprovalForAll.call(toHlebK2m, approvedKQAyLFH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractEfoeEVv = await ERC721.new({from: accounts[4]});
		const approveduBMQVa4 = false
		const toM1kG0FS = accounts[0]
		const tokenIdsD7XPle = BigInt("866")
		await contractEfoeEVv.setApprovalForAll.call(toM1kG0FS, approveduBMQVa4, {from: accounts[0]});
		const nullqbQ1vGl = await contractEfoeEVv.getApproved.call(tokenIdsD7XPle, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractEfoeEVv.setApprovalForAll.call(toM1kG0FS, approveduBMQVa4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractt5uRDBx = await ERC721.new({from: accounts[4]});
		const operatorGIQTfY6 = "0x0000000000000000000000000000000000000001"
		const ownerdDDEEJs = accounts[1]
		const operatoruxDtEg4 = accounts[5]
		const ownervyMWKSs = accounts[3]
		const tokenIdd3Z2Bv3 = BigInt("899")
		const tokenIdzUyrbvm = BigInt("701")
		const toCChFdg8 = accounts[4]
		const nulliccXCeM = await contractt5uRDBx.isApprovedForAll.call(ownerdDDEEJs, operatorGIQTfY6, {from: accounts[2]});
		const nullx3MzdsW = await contractt5uRDBx.isApprovedForAll.call(ownervyMWKSs, operatoruxDtEg4, {from: accounts[4]});
		const nullE4RfgOQ = await contractt5uRDBx.getApproved.call(tokenIdd3Z2Bv3, {from: "0x0000000000000000000000000000000000000001"});
		await contractt5uRDBx.approve.call(toCChFdg8, tokenIdzUyrbvm, {from: accounts[3]});

		assert.equal(nulliccXCeM, false)
		assert.equal(nullx3MzdsW, false)
		await expect(contractt5uRDBx.getApproved.call(tokenIdd3Z2Bv3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})