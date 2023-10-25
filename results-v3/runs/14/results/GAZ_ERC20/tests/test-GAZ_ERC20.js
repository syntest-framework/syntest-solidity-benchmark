const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20QUqIJtC = await GAZ_ERC20.new({from: accounts[2]});
		const uintJzncUW = BigInt("1007")
		const addressUAJvjBV = accounts[1]
		const addressysz1gre = accounts[0]
		const uintnTuKru5 = BigInt("274")
		const addressr4fHjn5 = accounts[1]
		const addressowL4rOo = accounts[2]
		const uintyvDvX4v = BigInt("1694")
		const addressJH6JTCi = accounts[4]
		const boolDOY8BNC = await GAZ_ERC20QUqIJtC.transferFrom.call(addressysz1gre, addressUAJvjBV, uintJzncUW, {from: accounts[1]});
		const boolFeG6wkE = await GAZ_ERC20QUqIJtC.transfer.call(addressr4fHjn5, uintnTuKru5, {from: accounts[1]});
		const boolDj7BQG = await GAZ_ERC20QUqIJtC.approve.call(addressowL4rOo, {from: accounts[4]});
		const boolLC14ogO = await GAZ_ERC20QUqIJtC.transfer.call(addressJH6JTCi, uintyvDvX4v, {from: accounts[0]});

		await expect(GAZ_ERC20QUqIJtC.transferFrom.call(addressysz1gre, addressUAJvjBV, uintJzncUW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20jR72nSa = await GAZ_ERC20.new({from: accounts[5]});
		const uintd3EuoBC = BigInt("2043")
		const addressO4csVY = accounts[0]
		const uintNEwoyap = BigInt("97")
		const addresssGKKPf = accounts[4]
		const uinteahMsOD = BigInt("221")
		const addressCpekXNW = accounts[2]
		const addressDMtFDj9 = accounts[1]
		const boolXx9WE5E = await GAZ_ERC20jR72nSa.transfer.call(addressO4csVY, uintd3EuoBC, {from: accounts[1]});
		const boolcfZxvUN = await GAZ_ERC20jR72nSa.approve.call(addresssGKKPf, uintNEwoyap, {from: accounts[3]});
		const boolX0X2VRQ = await GAZ_ERC20jR72nSa.transferFrom.call(addressDMtFDj9, addressCpekXNW, uinteahMsOD, {from: accounts[3]});

		await expect(GAZ_ERC20jR72nSa.transfer.call(addressO4csVY, uintd3EuoBC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC202ha5GV = await GAZ_ERC20.new({from: accounts[2]});
		const uintzwo5g65 = BigInt("1153")
		const addressv7KCxWX = "0x0000000000000000000000000000000000000001"
		const uintaCQpZP8 = BigInt("1070")
		const addressW7zrwdn = accounts[4]
		const addressfMJKSzB = accounts[2]
		const boolg8Pxeve = await GAZ_ERC202ha5GV.approve.call(addressv7KCxWX, uintzwo5g65, {from: accounts[3]});
		const boolgBhwvSQ = await GAZ_ERC202ha5GV.transferFrom.call(addressfMJKSzB, addressW7zrwdn, uintaCQpZP8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolg8Pxeve, true)
		await expect(GAZ_ERC202ha5GV.transferFrom.call(addressfMJKSzB, addressW7zrwdn, uintaCQpZP8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20dqIevTx = await GAZ_ERC20.new({from: accounts[1]});
		const addressAWueH6k = accounts[2]
		const uintz0Nm331 = BigInt("1940")
		const addressRYG8WS8 = accounts[4]
		const uintXIg7LG6 = BigInt("807")
		const addressYh98k7i = accounts[3]
		const uintzSu6d9 = BigInt("967")
		const addressTjPlanp = accounts[2]
		const addressiw7XknS = accounts[2]
		const addressnvIKf35 = accounts[3]
		const uintxCGNlJr = BigInt("114")
		const addressCGM9FKe = accounts[3]
		const addressxrsfgaB = accounts[3]
		const boolY2Slk8I = await GAZ_ERC20dqIevTx.approve.call(addressAWueH6k, {from: accounts[2]});
		const boolivKlgzY = await GAZ_ERC20dqIevTx.transfer.call(addressRYG8WS8, uintz0Nm331, {from: accounts[3]});
		const boolTAiVCxm = await GAZ_ERC20dqIevTx.transfer.call(addressYh98k7i, uintXIg7LG6, {from: accounts[0]});
		const boolgEypLM = await GAZ_ERC20dqIevTx.transferFrom.call(addressiw7XknS, addressTjPlanp, uintzSu6d9, {from: accounts[0]});
		const boolAN8UjET = await GAZ_ERC20dqIevTx.approve.call(addressnvIKf35, {from: accounts[1]});
		const boolwFJ9w3 = await GAZ_ERC20dqIevTx.transferFrom.call(addressxrsfgaB, addressCGM9FKe, uintxCGNlJr, {from: accounts[1]});

		await expect(GAZ_ERC20dqIevTx.approve.call(addressAWueH6k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vTa89b = await GAZ_ERC20.new({from: accounts[5]});
		const addressDxniWsD = accounts[5]
		const uintQUNr3hq = BigInt("1457")
		const addressZCLjxUq = "0x0000000000000000000000000000000000000001"
		const addressiSks8Wi = accounts[3]
		const uintlst5CH = BigInt("1100")
		const addressBFHYwB = accounts[2]
		const addressvcBBWHW = accounts[1]
		const uintOwTlsBh = BigInt("1671")
		const addressdhW8fJU = accounts[0]
		const addresscu25lOC = accounts[1]
		const boolbpZfCgA = await GAZ_ERC20vTa89b.approve.call(addressDxniWsD, {from: accounts[0]});
		const boola7XAq4u = await GAZ_ERC20vTa89b.transferFrom.call(addressiSks8Wi, addressZCLjxUq, uintQUNr3hq, {from: accounts[0]});
		const boolhzAUiJ = await GAZ_ERC20vTa89b.transferFrom.call(addressvcBBWHW, addressBFHYwB, uintlst5CH, {from: accounts[2]});
		const boolKLhdKJD = await GAZ_ERC20vTa89b.transferFrom.call(addresscu25lOC, addressdhW8fJU, uintOwTlsBh, {from: accounts[4]});

		await expect(GAZ_ERC20vTa89b.approve.call(addressDxniWsD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20qSM4G2Q = await GAZ_ERC20.new({from: accounts[4]});
		const uintFFe1Qai = BigInt("1299")
		const addressuGqOSq3 = accounts[0]
		const addressXFUza4M = accounts[3]
		const uintAfXoGv0 = BigInt("1287")
		const addressXMscD1F = accounts[0]
		const addressj8oEoOC = accounts[2]
		const booldLSTS0E = await GAZ_ERC20qSM4G2Q.approve.call(addressuGqOSq3, uintFFe1Qai, {from: accounts[5]});
		const boolgnonVql = await GAZ_ERC20qSM4G2Q.approve.call(addressXFUza4M, {from: accounts[1]});
		const boolQy0XiMM = await GAZ_ERC20qSM4G2Q.transferFrom.call(addressj8oEoOC, addressXMscD1F, uintAfXoGv0, {from: accounts[4]});

		assert.equal(booldLSTS0E, true)
		await expect(GAZ_ERC20qSM4G2Q.approve.call(addressXFUza4M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC202ha5GV = await GAZ_ERC20.new({from: accounts[2]});
		const uintG3x3Zp4 = BigInt("1098")
		const addressKHkAJNe = "0x0000000000000000000000000000000000000001"
		const addressQ9l4Pp = accounts[4]
		const boolg8Pxeve = await GAZ_ERC202ha5GV.approve.call(addressKHkAJNe, uintG3x3Zp4, {from: accounts[3]});
		const boolhpI62xY = await GAZ_ERC202ha5GV.approve.call(addressQ9l4Pp, {from: accounts[5]});

		assert.equal(boolg8Pxeve, true)
		await expect(GAZ_ERC202ha5GV.approve.call(addressQ9l4Pp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC202ha5GV = await GAZ_ERC20.new({from: accounts[2]});
		const addressvpFeBwb = accounts[2]
		const uintyQXsnli = BigInt("1153")
		const addressqEbG00g = "0x0000000000000000000000000000000000000000"
		const boolcIZoHw = await GAZ_ERC202ha5GV.approve.call(addressvpFeBwb, {from: "0x0000000000000000000000000000000000000001"});
		const boolg8Pxeve = await GAZ_ERC202ha5GV.approve.call(addressqEbG00g, uintyQXsnli, {from: accounts[3]});

		await expect(GAZ_ERC202ha5GV.approve.call(addressvpFeBwb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC202ha5GV = await GAZ_ERC20.new({from: accounts[2]});
		const addresselXVZfv = accounts[4]
		const addresszMpb2mu = accounts[0]
		const uintFdPzUsN = BigInt("1153")
		const addressaURQHch = "0x0000000000000000000000000000000000000001"
		const boolQciP5KY = await GAZ_ERC202ha5GV.approve.call(addresselXVZfv, {from: accounts[4]});
		const boolXRN0eZm = await GAZ_ERC202ha5GV.approve.call(addresszMpb2mu, {from: accounts[1]});
		const boolg8Pxeve = await GAZ_ERC202ha5GV.approve.call(addressaURQHch, uintFdPzUsN, {from: accounts[3]});

		await expect(GAZ_ERC202ha5GV.approve.call(addresselXVZfv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC202ha5GV = await GAZ_ERC20.new({from: accounts[2]});
		const uintlo2qP6e = BigInt("829")
		const addressVBtqXGD = accounts[1]
		const uintDp3Vovg = BigInt("1873")
		const addressEp5RV52 = accounts[3]
		const uintyKDXPR = BigInt("1153")
		const addressHqzWKf8 = "0x0000000000000000000000000000000000000002"
		const boolt99i33D = await GAZ_ERC202ha5GV.transfer.call(addressVBtqXGD, uintlo2qP6e, {from: accounts[2]});
		const boolMmstkhs = await GAZ_ERC202ha5GV.transfer.call(addressEp5RV52, uintDp3Vovg, {from: accounts[0]});
		const boolg8Pxeve = await GAZ_ERC202ha5GV.approve.call(addressHqzWKf8, uintyKDXPR, {from: accounts[3]});

		assert.equal(boolt99i33D, true)
		await expect(GAZ_ERC202ha5GV.transfer.call(addressEp5RV52, uintDp3Vovg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20VbNV6EF = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintec23qFN = BigInt("1445")
		const addressuth3v3G = accounts[4]
		const uintoCuiU9W = BigInt("743")
		const addressAIjYjIK = accounts[4]
		const boolo7c9U0A = await GAZ_ERC20VbNV6EF.transfer.call(addressuth3v3G, uintec23qFN, {from: accounts[1]});
		const booljKXeC0j = await GAZ_ERC20VbNV6EF.transfer.call(addressAIjYjIK, uintoCuiU9W, {from: accounts[3]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC202ha5GV = await GAZ_ERC20.new({from: accounts[2]});
		const addressxGQFniI = "0x0000000000000000000000000000000000000001"
		const uintvq4Hdvq = BigInt("21")
		const addressHl6ORl4 = "0x0000000000000000000000000000000000000001"
		const uintXPBY0g = BigInt("1133")
		const addressLF5JKGl = "0x0000000000000000000000000000000000000001"
		const boolwVPAR6 = await GAZ_ERC202ha5GV.approve.call(addressxGQFniI, {from: accounts[3]});
		const boolQXW6UEW = await GAZ_ERC202ha5GV.transfer.call(addressHl6ORl4, uintvq4Hdvq, {from: accounts[3]});
		const boolg8Pxeve = await GAZ_ERC202ha5GV.approve.call(addressLF5JKGl, uintXPBY0g, {from: accounts[3]});

		await expect(GAZ_ERC202ha5GV.approve.call(addressxGQFniI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})