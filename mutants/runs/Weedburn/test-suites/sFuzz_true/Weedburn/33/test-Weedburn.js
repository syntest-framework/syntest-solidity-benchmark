const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringBIc1Af = "IsNsFs0fDYaFvaHTcnXkrDAQOEDon9Cwf92gumjDlsL3fLn2jklNa4TtNR"
		const stringklp2iav = "p1KA7wdtnI9Fvk4WYdjUM1tpLobQFx1kSLI5H5EvsRBMGVeBzydV9aP6A52yD3rfGRr57Za"
		const uintiboQeGw = BigInt("130")
		const WeedburnOzZMnVJ = await Weedburn.new(stringBIc1Af, stringklp2iav, uintiboQeGw, {from: accounts[4]});
		const uintcvJKfir = BigInt("86")
		const address6IdgTm = accounts[0]
		const uintOD79VRG = BigInt("1020")
		const addressR9D5dk8 = accounts[0]
		const stringCpF2bih = await WeedburnOzZMnVJ.symbol.call({from: accounts[3]});
		const boolsAmkjB = await WeedburnOzZMnVJ.approve.call(address6IdgTm, uintcvJKfir, {from: accounts[2]});
		const boolF5rerHM = await WeedburnOzZMnVJ.transfer.call(addressR9D5dk8, uintOD79VRG, {from: accounts[0]});
		await WeedburnOzZMnVJ.disableLimitMode.call({from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnPJgldvZ = await Weedburn.new({from: accounts[2]});
		const uintqKKZVDf = BigInt("644")
		const addressRZiHob = accounts[4]
		const addressmAO7nrA = accounts[2]
		const uintVRCQyjq = BigInt("786")
		const addressBVxn4K3 = accounts[2]
		const addressoh4MfLN = accounts[1]
		const uintsrfqAX = BigInt("582")
		const addressQNW7m7l = accounts[5]
		const addresstvE4pCJ = accounts[0]
		const boolfotLJ9X = await WeedburnPJgldvZ.transferFrom.call(addressmAO7nrA, addressRZiHob, uintqKKZVDf, {from: accounts[5]});
		const uint8nwcVM1E = await WeedburnPJgldvZ.decimals.call({from: accounts[1]});
		const boola96kNWi = await WeedburnPJgldvZ.transferFrom.call(addressoh4MfLN, addressBVxn4K3, uintVRCQyjq, {from: accounts[4]});
		const boolSYJNoef = await WeedburnPJgldvZ.transferFrom.call(addresstvE4pCJ, addressQNW7m7l, uintsrfqAX, {from: accounts[1]});
		const stringbFGsrCo = await WeedburnPJgldvZ.name.call({from: accounts[3]});

		await expect(WeedburnPJgldvZ.transferFrom.call(addressmAO7nrA, addressRZiHob, uintqKKZVDf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnhtfVLo = await Weedburn.new({from: accounts[0]});
		const addressib9ugJU = "0x0000000000000000000000000000000000000001"
		const uint8mvOSJCU = await WeedburnhtfVLo.decimals.call({from: accounts[3]});
		const uint256nF37NRg = await WeedburnhtfVLo.balanceOf.call(addressib9ugJU, {from: accounts[0]});

		assert.equal(uint256nF37NRg, BigInt("0"))
		assert.equal(uint8mvOSJCU, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const WeedburnKteEaao = await Weedburn.new({from: accounts[3]});
		const uintadWtcgw = BigInt("1911")
		const uintr6b0vBr = BigInt("1743")
		const addressiEREZk4 = accounts[1]
		const addressMhxCcMO = accounts[0]
		const addressLM7brK = accounts[0]
		await WeedburnKteEaao.disableLimitMode.call({from: accounts[0]});
		const uint256dtcwltJ = await WeedburnKteEaao.burn.call(uintadWtcgw, {from: accounts[5]});
		const boolftNN6KD = await WeedburnKteEaao.transferFrom.call(addressMhxCcMO, addressiEREZk4, uintr6b0vBr, {from: accounts[0]});
		const uint256ZZMp4KP = await WeedburnKteEaao.balanceOf.call(addressLM7brK, {from: accounts[5]});

		await expect(WeedburnKteEaao.disableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnbW658IF = await Weedburn.new({from: accounts[0]});
		const addressHRU1tNS = accounts[0]
		const stringOojzvMo = await WeedburnbW658IF.symbol.call({from: accounts[2]});
		const stringZBtpjJM = await WeedburnbW658IF.name.call({from: accounts[3]});
		const uint256abLC2tn = await WeedburnbW658IF.balanceOf.call(addressHRU1tNS, {from: accounts[5]});
		await WeedburnbW658IF.enableLimitMode.call({from: accounts[2]});

		assert.equal(stringOojzvMo, "Weedburn")
		assert.equal(stringZBtpjJM, "t.me/burnweed1")
		assert.equal(uint256abLC2tn, BigInt("100000000000000000000000"))
		await expect(WeedburnbW658IF.enableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnbkg13s7 = await Weedburn.new({from: accounts[0]});
		const uintVNS6RU = BigInt("94")
		const addresslI1zjc = "0x0000000000000000000000000000000000000001"
		await Weedburnbkg13s7.disableDevMode.call({from: accounts[0]});
		await Weedburnbkg13s7.enableDevMode.call({from: accounts[3]});
		const boolgiI8vlZ = await Weedburnbkg13s7.transfer.call(addresslI1zjc, uintVNS6RU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NcJwN1W = await Weedburnbkg13s7.totalSupply.call({from: accounts[4]});
		const uint8pTNP2px = await Weedburnbkg13s7.decimals.call({from: accounts[1]});

		await expect(Weedburnbkg13s7.disableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnrOD7Uk3 = await Weedburn.new({from: accounts[1]});
		const uintKKZPxsk = BigInt("1447")
		const addresszdhcBdg = accounts[0]
		const boolJlsJPGr = await WeedburnrOD7Uk3.decreaseAllowance.call(addresszdhcBdg, uintKKZPxsk, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburnrOD7Uk3.enableDevMode.call({from: accounts[4]});
		const uint256pSQba1 = await WeedburnrOD7Uk3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnrOD7Uk3.decreaseAllowance.call(addresszdhcBdg, uintKKZPxsk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnknPttzW = await Weedburn.new({from: accounts[4]});
		const uintiztQDXH = BigInt("234")
		const address5cnzlm = accounts[3]
		const boolZQfRKwt = await WeedburnknPttzW.approve.call(address5cnzlm, uintiztQDXH, {from: accounts[4]});
		const uint256JyRqOfr = await WeedburnknPttzW.totalSupply.call({from: accounts[3]});

		assert.equal(boolZQfRKwt, true)
		assert.equal(uint256JyRqOfr, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnZ87TYEL = await Weedburn.new({from: accounts[3]});
		const addressvXQDqtt = accounts[4]
		const uintL8lVcC = BigInt("1029")
		const addressr8iEFy5 = accounts[5]
		const uintfrbnZ0d = BigInt("918")
		const addressUEWhAK = accounts[5]
		const uint256n62EMCF = await WeedburnZ87TYEL.balanceOf.call(addressvXQDqtt, {from: accounts[5]});
		const uint256fggIjSa = await WeedburnZ87TYEL.totalSupply.call({from: accounts[1]});
		const boolVQqrBun = await WeedburnZ87TYEL.transfer.call(addressr8iEFy5, uintL8lVcC, {from: accounts[4]});
		const boolFVKE8lK = await WeedburnZ87TYEL.approve.call(addressUEWhAK, uintfrbnZ0d, {from: accounts[0]});

		assert.equal(uint256fggIjSa, BigInt("100000000000000000000000"))
		assert.equal(uint256n62EMCF, BigInt("0"))
		await expect(WeedburnZ87TYEL.transfer.call(addressr8iEFy5, uintL8lVcC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnLhBh5r2 = await Weedburn.new({from: accounts[5]});
		const address8zngXL = "0x0000000000000000000000000000000000000001"
		const addressfIXclAr = accounts[1]
		const uintt49e1Ho = BigInt("35")
		const addressoXkzRl6 = accounts[4]
		const addressR6hkQFq = accounts[2]
		const uint8homeu38 = await WeedburnLhBh5r2.decimals.call({from: accounts[2]});
		const uint256uKnPeoa = await WeedburnLhBh5r2.allowance.call(addressfIXclAr, address8zngXL, {from: accounts[4]});
		const boolwnllBbH = await WeedburnLhBh5r2.transferFrom.call(addressR6hkQFq, addressoXkzRl6, uintt49e1Ho, {from: accounts[0]});

		assert.equal(uint256uKnPeoa, BigInt("0"))
		assert.equal(uint8homeu38, BigInt("18"))
		await expect(WeedburnLhBh5r2.transferFrom.call(addressR6hkQFq, addressoXkzRl6, uintt49e1Ho, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZ87TYEL = await Weedburn.new({from: accounts[3]});
		const addresshlp5GPd = accounts[4]
		const uintsYLejhR = BigInt("1370")
		const addressYDiWOkb = accounts[1]
		const uint3TyB73 = BigInt("1029")
		const addressDkNy7Y2 = accounts[5]
		const uint256n62EMCF = await WeedburnZ87TYEL.balanceOf.call(addresshlp5GPd, {from: accounts[5]});
		const boolZ2zBETI = await WeedburnZ87TYEL.increaseAllowance.call(addressYDiWOkb, uintsYLejhR, {from: accounts[1]});
		const boolVQqrBun = await WeedburnZ87TYEL.transfer.call(addressDkNy7Y2, uint3TyB73, {from: accounts[4]});

		assert.equal(boolZ2zBETI, true)
		assert.equal(uint256n62EMCF, BigInt("0"))
		await expect(WeedburnZ87TYEL.transfer.call(addressDkNy7Y2, uint3TyB73, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZ87TYEL = await Weedburn.new({from: accounts[3]});
		const uintdHJ6Ne6 = BigInt("1280")
		const addressVPS8bdp = accounts[2]
		const addressH93cuoz = accounts[4]
		const uintG7g83tG = BigInt("190")
		const address9L3PC7 = accounts[0]
		const addressLYmUhL1 = "0x0000000000000000000000000000000000000001"
		const uinteVyPcr = BigInt("784")
		const addressL0AgTU6 = accounts[2]
		const addressTxaMQpq = accounts[3]
		const addresskWIoHN = accounts[4]
		const uintgvhXbpR = BigInt("1029")
		const addressGdjiXwf = accounts[7]
		const uintmnk9SO = BigInt("316")
		const addressP9oucTk = accounts[5]
		const addressUDzmVf = await WeedburnZ87TYEL.burnFrom.call(addressVPS8bdp, uintdHJ6Ne6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256n62EMCF = await WeedburnZ87TYEL.balanceOf.call(addressH93cuoz, {from: accounts[5]});
		const boolCjEqIDH = await WeedburnZ87TYEL.transferFrom.call(addressLYmUhL1, address9L3PC7, uintG7g83tG, {from: accounts[0]});
		const boolnLnpX7V = await WeedburnZ87TYEL.transfer.call(addressL0AgTU6, uinteVyPcr, {from: accounts[0]});
		const uint256qWpZ71C = await WeedburnZ87TYEL.allowance.call(addresskWIoHN, addressTxaMQpq, {from: accounts[5]});
		const boolVQqrBun = await WeedburnZ87TYEL.transfer.call(addressGdjiXwf, uintgvhXbpR, {from: accounts[4]});
		const addresskxReC1v = await WeedburnZ87TYEL.burnFrom.call(addressP9oucTk, uintmnk9SO, {from: accounts[1]});

		await expect(WeedburnZ87TYEL.burnFrom.call(addressVPS8bdp, uintdHJ6Ne6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZ87TYEL = await Weedburn.new({from: accounts[3]});
		const uintaj2FZos = BigInt("461")
		const uintDl6EsS = BigInt("323")
		const addressZOErYIY = accounts[6]
		const uint256i6qp5Hy = await WeedburnZ87TYEL.burn.call(uintaj2FZos, {from: accounts[1]});
		const stringGVk6DqG = await WeedburnZ87TYEL.symbol.call({from: accounts[4]});
		const boolVQqrBun = await WeedburnZ87TYEL.transfer.call(addressZOErYIY, uintDl6EsS, {from: accounts[4]});

		await expect(WeedburnZ87TYEL.burn.call(uintaj2FZos, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZ87TYEL = await Weedburn.new({from: accounts[3]});
		const uintNWx8NKb = BigInt("1675")
		const uintaQYJPqv = BigInt("1056")
		const addressFzHfYZJ = accounts[6]
		const stringdJfqQvV = await WeedburnZ87TYEL.symbol.call({from: accounts[1]});
		const uint256JDijbyh = await WeedburnZ87TYEL.burn.call(uintNWx8NKb, {from: accounts[3]});
		const boolVQqrBun = await WeedburnZ87TYEL.transfer.call(addressFzHfYZJ, uintaQYJPqv, {from: accounts[4]});

		assert.equal(stringdJfqQvV, "Weedburn")
		await expect(WeedburnZ87TYEL.transfer.call(addressFzHfYZJ, uintaQYJPqv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZ87TYEL = await Weedburn.new({from: accounts[3]});
		const uintss0nj8D = BigInt("1855")
		const addressoxiUDHm = accounts[4]
		const uintHrLgyf = BigInt("1029")
		const addresssDE4u8 = accounts[7]
		const boolyeXeAR2 = await WeedburnZ87TYEL.transfer.call(addressoxiUDHm, uintss0nj8D, {from: accounts[3]});
		const boolVQqrBun = await WeedburnZ87TYEL.transfer.call(addresssDE4u8, uintHrLgyf, {from: accounts[4]});

		assert.equal(boolyeXeAR2, true)
		await expect(WeedburnZ87TYEL.transfer.call(addresssDE4u8, uintHrLgyf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnx6qHyzY = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnF7VIP0 = accounts[1]
		const addressvJdmdYB = accounts[2]
		const uintP6g8Lbb = BigInt("1501")
		const addressrjEqbLE = accounts[1]
		const uintoA8jlaW = BigInt("819")
		const addressCI8oui = accounts[4]
		const uint8XNXuvlL = await Weedburnx6qHyzY.decimals.call({from: accounts[3]});
		const uint256G4haeHb = await Weedburnx6qHyzY.allowance.call(addressvJdmdYB, addressnF7VIP0, {from: accounts[0]});
		const boolxDtRXSw = await Weedburnx6qHyzY.decreaseAllowance.call(addressrjEqbLE, uintP6g8Lbb, {from: accounts[4]});
		const boolT28mf45 = await Weedburnx6qHyzY.approve.call(addressCI8oui, uintoA8jlaW, {from: accounts[1]});
	});
})