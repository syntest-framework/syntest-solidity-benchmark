const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractci1M4vF = await ERC721.new({from: accounts[3]});
		const tokenIdP16PEz3 = BigInt("919")
		const toq54fAZk = accounts[4]
		const approvedsTlXEk = false
		const toMqOuI4i = "0x0000000000000000000000000000000000000001"
		const _datahzGytjE = "0x0b0c17041a0d0f190a05071902061304140c1a0a1a170d07011709"
		const tokenIdrLvjHTq = BigInt("387")
		const toXBIhfss = accounts[4]
		const fromCfIoHNc = accounts[3]
		await contractci1M4vF.approve.call(toq54fAZk, tokenIdP16PEz3, {from: accounts[4]});
		await contractci1M4vF.setApprovalForAll.call(toMqOuI4i, approvedsTlXEk, {from: accounts[3]});
		await contractci1M4vF.safeTransferFrom.call(fromCfIoHNc, toXBIhfss, tokenIdrLvjHTq, _datahzGytjE, {from: accounts[2]});

		await expect(contractci1M4vF.approve.call(toq54fAZk, tokenIdP16PEz3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractOwTlec9 = await ERC721.new({from: accounts[3]});
		const operatorYRfYONy = accounts[2]
		const ownerxqSLdS9 = accounts[0]
		const tokenIdLaPhb79 = BigInt("703")
		const nullw1agz4L = await contractOwTlec9.isApprovedForAll.call(ownerxqSLdS9, operatorYRfYONy, {from: accounts[0]});
		const nullHEHSntm = await contractOwTlec9.getApproved.call(tokenIdLaPhb79, {from: accounts[4]});

		assert.equal(nullw1agz4L, false)
		await expect(contractOwTlec9.getApproved.call(tokenIdLaPhb79, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractdfeleXT = await ERC721.new({from: accounts[3]});
		const operatorGRcyy9P = accounts[0]
		const ownersHjWjOn = accounts[0]
		const approvedjXURnCv = false
		const toHuFOc7V = accounts[1]
		const operatorbuYBSHk = "0x0000000000000000000000000000000000000001"
		const owneruCQnStX = accounts[3]
		const nullwwYufm3 = await contractdfeleXT.isApprovedForAll.call(ownersHjWjOn, operatorGRcyy9P, {from: accounts[2]});
		await contractdfeleXT.setApprovalForAll.call(toHuFOc7V, approvedjXURnCv, {from: accounts[1]});
		const nullLA8EES3 = await contractdfeleXT.isApprovedForAll.call(owneruCQnStX, operatorbuYBSHk, {from: accounts[4]});

		assert.equal(nullwwYufm3, false)
		await expect(contractdfeleXT.setApprovalForAll.call(toHuFOc7V, approvedjXURnCv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractn7csgBd = await ERC721.new({from: accounts[0]});
		const tokenIdMrAMg8n = BigInt("991")
		const tozOoFpQI = accounts[0]
		const fromMY8iDs = accounts[1]
		const tokenIdZGHuQtS = BigInt("84")
		const tonqSBhko = "0x0000000000000000000000000000000000000001"
		const fromakzKY0z = accounts[1]
		const tokenIdGKVdz5F = BigInt("1226")
		const tokenIdfzrKr2o = BigInt("525")
		const tokenIdSsJpDxG = BigInt("134")
		const toEBd683m = accounts[1]
		const tokenIdQXW5yrk = BigInt("668")
		await contractn7csgBd.transferFrom.call(fromMY8iDs, tozOoFpQI, tokenIdMrAMg8n, {from: accounts[1]});
		await contractn7csgBd.transferFrom.call(fromakzKY0z, tonqSBhko, tokenIdZGHuQtS, {from: accounts[1]});
		const nullxlNstoS = await contractn7csgBd.ownerOf.call(tokenIdGKVdz5F, {from: accounts[1]});
		const nullslUSRN = await contractn7csgBd.getApproved.call(tokenIdfzrKr2o, {from: accounts[2]});
		await contractn7csgBd.approve.call(toEBd683m, tokenIdSsJpDxG, {from: accounts[3]});
		const nullZeAOCOc = await contractn7csgBd.ownerOf.call(tokenIdQXW5yrk, {from: accounts[3]});

		await expect(contractn7csgBd.transferFrom.call(fromMY8iDs, tozOoFpQI, tokenIdMrAMg8n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractQ1fSVns = await ERC721.new({from: accounts[5]});
		const _dataDZbTAGW = "0x181a160019"
		const tokenIdO3bKcTR = BigInt("441")
		const toxj8d0u = accounts[0]
		const fromdbewrDy = accounts[1]
		const tokenId96f7Kw = BigInt("294")
		const toywQrlu = accounts[1]
		const fromOx11EBj = accounts[4]
		const operatorBaIl43U = "0x0000000000000000000000000000000000000001"
		const ownerGCNUHi1 = accounts[3]
		await contractQ1fSVns.safeTransferFrom.call(fromdbewrDy, toxj8d0u, tokenIdO3bKcTR, _dataDZbTAGW, {from: accounts[3]});
		await contractQ1fSVns.safeTransferFrom.call(fromOx11EBj, toywQrlu, tokenId96f7Kw, {from: accounts[0]});
		const nullhO9qLf8 = await contractQ1fSVns.isApprovedForAll.call(ownerGCNUHi1, operatorBaIl43U, {from: accounts[1]});

		await expect(contractQ1fSVns.safeTransferFrom.call(fromdbewrDy, toxj8d0u, tokenIdO3bKcTR, _dataDZbTAGW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractatPOZFM = await ERC721.new({from: accounts[4]});
		const tokenIdOdSt6xT = BigInt("1614")
		const toJqTDcq4 = accounts[1]
		const fromc5HXPt5 = accounts[0]
		const tokenId0QMRRp = BigInt("953")
		const toyuc0Lsy = accounts[0]
		const tokenIdsJE8eWB = BigInt("414")
		const tokenIdl7eWzMj = BigInt("344")
		const tokenIdkOchRcl = BigInt("1917")
		await contractatPOZFM.safeTransferFrom.call(fromc5HXPt5, toJqTDcq4, tokenIdOdSt6xT, {from: "0x0000000000000000000000000000000000000001"});
		await contractatPOZFM.approve.call(toyuc0Lsy, tokenId0QMRRp, {from: accounts[4]});
		const nullFKUkyny = await contractatPOZFM.ownerOf.call(tokenIdsJE8eWB, {from: "0x0000000000000000000000000000000000000001"});
		const nullUXq2XN1 = await contractatPOZFM.getApproved.call(tokenIdl7eWzMj, {from: accounts[1]});
		const nullZCyC5Pj = await contractatPOZFM.ownerOf.call(tokenIdkOchRcl, {from: accounts[2]});

		await expect(contractatPOZFM.safeTransferFrom.call(fromc5HXPt5, toJqTDcq4, tokenIdOdSt6xT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVVsd4jC = await ERC721.new({from: accounts[3]});
		const operatorO5ImXol = accounts[0]
		const ownerk3IyAdU = accounts[0]
		const approvedat84Zcm = true
		const to0t1TgD = accounts[4]
		const tokenIdjhJjoWy = BigInt("2037")
		const toQb7LEXR = accounts[5]
		const frombiaTGsQ = accounts[4]
		const approvedRAllgO = false
		const todlImzhD = accounts[1]
		const operatoryYju0xj = "0x0000000000000000000000000000000000000001"
		const ownerSaWP4vO = accounts[3]
		const nullDDWbEjW = await contractVVsd4jC.isApprovedForAll.call(ownerk3IyAdU, operatorO5ImXol, {from: accounts[2]});
		await contractVVsd4jC.setApprovalForAll.call(to0t1TgD, approvedat84Zcm, {from: accounts[0]});
		await contractVVsd4jC.transferFrom.call(frombiaTGsQ, toQb7LEXR, tokenIdjhJjoWy, {from: accounts[0]});
		await contractVVsd4jC.setApprovalForAll.call(todlImzhD, approvedRAllgO, {from: accounts[1]});
		const nulljK8MjYo = await contractVVsd4jC.isApprovedForAll.call(ownerSaWP4vO, operatoryYju0xj, {from: accounts[4]});

		assert.equal(nullDDWbEjW, false)
		await expect(contractVVsd4jC.setApprovalForAll.call(to0t1TgD, approvedat84Zcm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractOkmDfGy = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorxsMqovp = accounts[2]
		const owneriuVys0M = accounts[2]
		const operatorZqd2i4 = accounts[0]
		const ownerNhyPXJP = accounts[2]
		const tokenIdYUZzJqh = BigInt("773")
		const tokenIdR9JyKEk = BigInt("1514")
		const tokenIdJswIjae = BigInt("1500")
		const toJDERi44 = accounts[0]
		const fromDbde4Eg = accounts[0]
		const nullzqnzCjk = await contractOkmDfGy.isApprovedForAll.call(owneriuVys0M, operatorxsMqovp, {from: accounts[3]});
		const nullmfDFli = await contractOkmDfGy.isApprovedForAll.call(ownerNhyPXJP, operatorZqd2i4, {from: accounts[0]});
		const nullKS514C5 = await contractOkmDfGy.getApproved.call(tokenIdYUZzJqh, {from: accounts[4]});
		const nullcJt3ZFc = await contractOkmDfGy.getApproved.call(tokenIdR9JyKEk, {from: "0x0000000000000000000000000000000000000001"});
		await contractOkmDfGy.safeTransferFrom.call(fromDbde4Eg, toJDERi44, tokenIdJswIjae, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractetjsRU2 = await ERC721.new({from: accounts[4]});
		const ownerHXF4wc3 = accounts[0]
		const tokenIdYHC5JfR = BigInt("1658")
		const nullPZuOiv = await contractetjsRU2.balanceOf.call(ownerHXF4wc3, {from: accounts[2]});
		const nullmZN87Fi = await contractetjsRU2.getApproved.call(tokenIdYHC5JfR, {from: accounts[1]});

		assert.equal(nullPZuOiv, 0)
		await expect(contractetjsRU2.getApproved.call(tokenIdYHC5JfR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})