const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractAlXB5cn = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueLUVkZet = BigInt("378")
		const valuepDCkZo3 = BigInt("1561")
		const spenderDJ3gYW = accounts[0]
		const valueLup5L65 = BigInt("1321")
		const dstKn3SDH5 = accounts[0]
		await contractAlXB5cn.deposit.call(valueLUVkZet, {from: accounts[1]});
		const nullcUwu9BV = await contractAlXB5cn.approve.call(spenderDJ3gYW, valuepDCkZo3, {from: accounts[3]});
		const nulld22yfnK = await contractAlXB5cn.transfer.call(dstKn3SDH5, valueLup5L65, {from: accounts[3]});

		await expect(contractAlXB5cn.deposit.call(valueLUVkZet, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractyz2MBNY = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueWjfZOqR = BigInt("1579")
		const dstucHb0fp = accounts[3]
		const srcMFFDkS7 = accounts[4]
		const valueY5MWVnr = BigInt("882")
		const nullF4BoYUe = await contractyz2MBNY.transferFrom.call(srcMFFDkS7, dstucHb0fp, valueWjfZOqR, {from: accounts[5]});
		await contractyz2MBNY.deposit.call(valueY5MWVnr, {from: accounts[5]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractGncNUmQ = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valuePmSjvKc = BigInt("1155")
		const dstsyf0XgA = "0x0000000000000000000000000000000000000001"
		const srcNSLPpka = accounts[4]
		const valueGoNpu3x = BigInt("1894")
		const dstcPg66Vy = accounts[1]
		const srcZheCwp8 = accounts[2]
		const valueq5PcFm = BigInt("1262")
		const nullttfA4UO = await contractGncNUmQ.transferFrom.call(srcNSLPpka, dstsyf0XgA, valuePmSjvKc, {from: accounts[5]});
		const nullWWYEh0 = await contractGncNUmQ.transferFrom.call(srcZheCwp8, dstcPg66Vy, valueGoNpu3x, {from: accounts[4]});
		await contractGncNUmQ.withdraw.call(valueq5PcFm, {from: accounts[5]});

		await expect(contractGncNUmQ.transferFrom.call(srcNSLPpka, dstsyf0XgA, valuePmSjvKc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractxef67cy = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountRxw2YG = "0x0000000000000000000000000000000000000001"
		const valueE7fHvvq = BigInt("851")
		const dstuI3sQO4 = accounts[5]
		const srcOMIGNG2 = "0x0000000000000000000000000000000000000001"
		const valueoxEQnDa = BigInt("1318")
		const dstINAfwGH = accounts[5]
		const srccEfXyvn = "0x0000000000000000000000000000000000000001"
		const valuejYs9Z8V = BigInt("1997")
		const nullLlkpI2E = await contractxef67cy.claimable.call(accountRxw2YG, {from: accounts[0]});
		const nullEg6R3pf = await contractxef67cy.claim.call({from: accounts[4]});
		const nullCViG7R8 = await contractxef67cy.transferFrom.call(srcOMIGNG2, dstuI3sQO4, valueE7fHvvq, {from: accounts[0]});
		const nullhAWKBb = await contractxef67cy.transferFrom.call(srccEfXyvn, dstINAfwGH, valueoxEQnDa, {from: accounts[1]});
		await contractxef67cy.exit.call({from: accounts[0]});
		await contractxef67cy.withdraw.call(valuejYs9Z8V, {from: accounts[0]});

		assert.equal(nullEg6R3pf, 0)
		assert.equal(nullLlkpI2E, 0)
		await expect(contractxef67cy.transferFrom.call(srcOMIGNG2, dstuI3sQO4, valueE7fHvvq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractDbq9ICC = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueVlKXAcI = BigInt("1993")
		const spenderQdl0bnn = accounts[5]
		const valuem1L1VOo = BigInt("1337")
		const valueyfy7vj9 = BigInt("407")
		const valuerKkDkR = BigInt("959")
		const dstIbWUKZT = accounts[3]
		const valueuen3r3c = BigInt("1391")
		const nullyoaDs8 = await contractDbq9ICC.approve.call(spenderQdl0bnn, valueVlKXAcI, {from: accounts[2]});
		await contractDbq9ICC.deposit.call(valuem1L1VOo, {from: accounts[4]});
		await contractDbq9ICC.deposit.call(valueyfy7vj9, {from: accounts[2]});
		const nulltQbedp9 = await contractDbq9ICC.transfer.call(dstIbWUKZT, valuerKkDkR, {from: "0x0000000000000000000000000000000000000001"});
		await contractDbq9ICC.withdraw.call(valueuen3r3c, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullyoaDs8, true)
		await expect(contractDbq9ICC.deposit.call(valuem1L1VOo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractHzyctT9 = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueLUTUEO = BigInt("788")
		const dstUGp4NB = accounts[0]
		const accountButDY9O = accounts[3]
		const valueQIFDotd = BigInt("267")
		const valuePVn1Udc = BigInt("951")
		const valuevixeUm0 = BigInt("934")
		const nullnHloR6q = await contractHzyctT9.transfer.call(dstUGp4NB, valueLUTUEO, {from: accounts[0]});
		const nullQ6lzps = await contractHzyctT9.claimable.call(accountButDY9O, {from: "0x0000000000000000000000000000000000000001"});
		await contractHzyctT9.withdraw.call(valueQIFDotd, {from: accounts[2]});
		await contractHzyctT9.withdraw.call(valuePVn1Udc, {from: accounts[2]});
		await contractHzyctT9.withdraw.call(valuevixeUm0, {from: accounts[4]});

		await expect(contractHzyctT9.transfer.call(dstUGp4NB, valueLUTUEO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractTV6Linq = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueS6itbfx = BigInt("1685")
		const valuehXopKAb = BigInt("887")
		const dstVqGE15X = accounts[1]
		const srcOcMkiF7 = accounts[4]
		const accountGu2tp6W = accounts[4]
		const valuexit8oE = BigInt("602")
		const dstuXNHk4 = accounts[4]
		const srcYjX70n = accounts[1]
		const valueD2GDJVK = BigInt("1170")
		await contractTV6Linq.withdraw.call(valueS6itbfx, {from: accounts[4]});
		const nullh3yOpyc = await contractTV6Linq.transferFrom.call(srcOcMkiF7, dstVqGE15X, valuehXopKAb, {from: "0x0000000000000000000000000000000000000001"});
		const null49gKEz = await contractTV6Linq.claimable.call(accountGu2tp6W, {from: accounts[4]});
		const nullw5REAzy = await contractTV6Linq.transferFrom.call(srcYjX70n, dstuXNHk4, valuexit8oE, {from: accounts[2]});
		await contractTV6Linq.exit.call({from: accounts[0]});
		await contractTV6Linq.deposit.call(valueD2GDJVK, {from: accounts[0]});

		await expect(contractTV6Linq.withdraw.call(valueS6itbfx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracthBJBG1D = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountYwMloAz = accounts[2]
		const accountcdQOb6 = "0x0000000000000000000000000000000000000001"
		const toggleJ9axa1Y = true
		const addrjLXgUiL = accounts[1]
		const valueFoUlQNO = BigInt("851")
		const dstEYkujFd = accounts[5]
		const srcLE53hgQ = "0x0000000000000000000000000000000000000001"
		const valueLvji2W9 = BigInt("1318")
		const dstQweMpLT = accounts[5]
		const srcpu2J29p = "0x0000000000000000000000000000000000000001"
		const valueCulTvTt = BigInt("1997")
		const nullr6MLaoD = await contracthBJBG1D.claimable.call(accountYwMloAz, {from: accounts[1]});
		const nullWQnCet = await contracthBJBG1D.claimable.call(accountcdQOb6, {from: accounts[0]});
		await contracthBJBG1D.exit.call({from: accounts[5]});
		await contracthBJBG1D.setBridge.call(addrjLXgUiL, toggleJ9axa1Y, {from: accounts[1]});
		const nullXD5EBAo = await contracthBJBG1D.claim.call({from: accounts[4]});
		const nullgM9g6I1 = await contracthBJBG1D.transferFrom.call(srcLE53hgQ, dstEYkujFd, valueFoUlQNO, {from: accounts[0]});
		const nullPjhw5KU = await contracthBJBG1D.transferFrom.call(srcpu2J29p, dstQweMpLT, valueLvji2W9, {from: accounts[1]});
		await contracthBJBG1D.exit.call({from: accounts[0]});
		await contracthBJBG1D.withdraw.call(valueCulTvTt, {from: accounts[0]});

		assert.equal(nullWQnCet, 0)
		assert.equal(nullr6MLaoD, 0)
		await expect(contracthBJBG1D.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractMPcm9j = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountmW5yZz = accounts[2]
		const accountrhKY3E0 = "0x0000000000000000000000000000000000000001"
		const toggleCgPmhG = true
		const addreDPz3n = accounts[1]
		const valueTnkFQ7Q = BigInt("849")
		const dstSi0H6fV = accounts[5]
		const srclE36YDh = "0x0000000000000000000000000000000000000001"
		const valuenwmFHLE = BigInt("1318")
		const dstSmn7TGg = accounts[5]
		const srcqYM27UR = "0x0000000000000000000000000000000000000001"
		const valueKhjxE9U = BigInt("1997")
		const nullIqebQlJ = await contractMPcm9j.claimable.call(accountmW5yZz, {from: accounts[1]});
		const nullszYruW = await contractMPcm9j.claimable.call(accountrhKY3E0, {from: accounts[0]});
		await contractMPcm9j.setBridge.call(addreDPz3n, toggleCgPmhG, {from: accounts[1]});
		const nullE4DcxfA = await contractMPcm9j.claim.call({from: accounts[4]});
		const nullbv4Hsho = await contractMPcm9j.transferFrom.call(srclE36YDh, dstSi0H6fV, valueTnkFQ7Q, {from: accounts[0]});
		const nullwuISUPc = await contractMPcm9j.transferFrom.call(srcqYM27UR, dstSmn7TGg, valuenwmFHLE, {from: accounts[1]});
		await contractMPcm9j.exit.call({from: accounts[0]});
		await contractMPcm9j.withdraw.call(valueKhjxE9U, {from: accounts[0]});

		assert.equal(nullE4DcxfA, 0)
		assert.equal(nullIqebQlJ, 0)
		assert.equal(nullszYruW, 0)
		await expect(contractMPcm9j.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractUHXOYjR = await VBZRXWrapper_alt.new({from: accounts[3]});
		const togglepGD0U7M = true
		const addr20Crm7 = accounts[1]
		const valueio9i3Cn = BigInt("85")
		const valueS4qjBmh = BigInt("1155")
		const dstmYmRrwi = "0x0000000000000000000000000000000000000001"
		const srcsgV14cO = accounts[4]
		const valuepnUJXbU = BigInt("1282")
		await contractUHXOYjR.setBridge.call(addr20Crm7, togglepGD0U7M, {from: accounts[2]});
		await contractUHXOYjR.withdraw.call(valueio9i3Cn, {from: accounts[4]});
		const nullemfawWd = await contractUHXOYjR.transferFrom.call(srcsgV14cO, dstmYmRrwi, valueS4qjBmh, {from: accounts[5]});
		await contractUHXOYjR.withdraw.call(valuepnUJXbU, {from: accounts[5]});

		await expect(contractUHXOYjR.setBridge.call(addr20Crm7, togglepGD0U7M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractwg0ZkNd = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountZkXRK9V = "0x00000000000000000000000000000000000000-1"
		const valuemzvAy6m = BigInt("627")
		const valuet6nCMMh = BigInt("1295")
		const valuezuYXBlG = BigInt("1123")
		const dstBeLxS9g = accounts[2]
		const nullyFoqp0 = await contractwg0ZkNd.claimable.call(accountZkXRK9V, {from: "0x0000000000000000000000000000000000000001"});
		await contractwg0ZkNd.withdraw.call(valuemzvAy6m, {from: accounts[4]});
		await contractwg0ZkNd.withdraw.call(valuet6nCMMh, {from: accounts[5]});
		const nulllVw63fq = await contractwg0ZkNd.transfer.call(dstBeLxS9g, valuezuYXBlG, {from: accounts[1]});

		await expect(contractwg0ZkNd.claimable.call(accountZkXRK9V, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})