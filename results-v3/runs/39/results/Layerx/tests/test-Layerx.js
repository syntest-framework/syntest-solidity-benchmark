const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressOeLD5Lq = accounts[0]
		const LayerxwhTU46l = await Layerx.new(addressOeLD5Lq, {from: accounts[2]});
		const uint0vnp3K = BigInt("676")
		const boolsNaqCAn = false
		const boolAvt3UO5 = true
		const uintcQ0dL6O = BigInt("496")
		const addressFqtB33Z = accounts[3]
		const uintXkBUyb = await LayerxwhTU46l.withdraw.call(uint0vnp3K, {from: accounts[0]});
		const boolvPXENpF = await LayerxwhTU46l.setIsPaused.call(boolsNaqCAn, {from: "0x0000000000000000000000000000000000000001"});
		const boolpEbGehN = await LayerxwhTU46l.setIsPaused.call(boolAvt3UO5, {from: accounts[4]});
		const boolhuLRsfj = await LayerxwhTU46l.approve.call(addressFqtB33Z, uintcQ0dL6O, {from: accounts[0]});

		await expect(LayerxwhTU46l.withdraw.call(uint0vnp3K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressreQWKCx = accounts[5]
		const LayerxErgHuWC = await Layerx.new(addressreQWKCx, {from: accounts[1]});
		const uinttoZVczf = BigInt("842")
		const addressg2qgrx = accounts[0]
		const addressN1HaRwu = accounts[1]
		const addressZKAR8CY = accounts[2]
		const boolgRaIpbh = await LayerxErgHuWC.transfer.call(addressg2qgrx, uinttoZVczf, {from: accounts[0]});
		const addresstYZI4xB = await LayerxErgHuWC.setNewStakeCreator.call(addressN1HaRwu, {from: accounts[0]});
		const addressF8Mkwpp = await LayerxErgHuWC.setNewStakeCreator.call(addressZKAR8CY, {from: accounts[1]});

		await expect(LayerxErgHuWC.transfer.call(addressg2qgrx, uinttoZVczf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressHyLlwzq = accounts[0]
		const LayerxtZuvDc8 = await Layerx.new(addressHyLlwzq, {from: accounts[1]});
		const uintplqG514 = BigInt("1252")
		const uint256nvlvj0C = await LayerxtZuvDc8.burn.call(uintplqG514, {from: accounts[1]});
		await LayerxtZuvDc8.onlyOwner.call({from: accounts[2]});
		await LayerxtZuvDc8.paused.call({from: accounts[0]});
		await LayerxtZuvDc8.unlock.call({from: accounts[4]});

		await expect(LayerxtZuvDc8.burn.call(uintplqG514, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressIoa88F = accounts[1]
		const LayerxJBFaqY = await Layerx.new(addressIoa88F, {from: accounts[2]});
		const uintNUaPTJJ = BigInt("725")
		const addressw9T1Dn6 = accounts[4]
		const addresslpG2yUC = accounts[2]
		const uintETAsP7Z = BigInt("2011")
		await LayerxJBFaqY.addStakePayment.call({from: accounts[2]});
		const boolHNIMvnf = await LayerxJBFaqY.approve.call(addressw9T1Dn6, uintNUaPTJJ, {from: accounts[5]});
		const uintSXjT6XP = await LayerxJBFaqY.getStakesNum.call({from: accounts[2]});
		const addressemeRq1Z = await LayerxJBFaqY.setNewStakeCreator.call(addresslpG2yUC, {from: accounts[5]});
		const uintF0QVcGV = await LayerxJBFaqY.withdraw.call(uintETAsP7Z, {from: accounts[1]});

		await expect(LayerxJBFaqY.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressImD5kSb = accounts[0]
		const LayerxFqN3qm7 = await Layerx.new(addressImD5kSb, {from: accounts[5]});
		const addressSkCUIft = accounts[0]
		const uintR1CX4c1 = BigInt("471")
		const uintOrqE1lk = BigInt("1029")
		const uintDrhcpf = await LayerxFqN3qm7.balanceOf.call(addressSkCUIft, {from: accounts[3]});
		const uintFX3hMYq = await LayerxFqN3qm7.withdraw.call(uintR1CX4c1, {from: "0x0000000000000000000000000000000000000001"});
		const uintpzT1XjH = await LayerxFqN3qm7.withdraw.call(uintOrqE1lk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintDrhcpf, BigInt("40000000000000000000000"))
		await expect(LayerxFqN3qm7.withdraw.call(uintR1CX4c1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresssUr332W = accounts[3]
		const LayerxchJNUT5 = await Layerx.new(addresssUr332W, {from: accounts[4]});
		const uintVcCxpWI = BigInt("1528")
		const addressFEew0dn = accounts[5]
		const addressA2ZeRKs = accounts[3]
		const boolTDm3ftW = false
		const addressGcPXqKE = "0x0000000000000000000000000000000000000001"
		const addresso1wrEZX = accounts[0]
		const boolXE48SvQ = await LayerxchJNUT5.transferFrom.call(addressA2ZeRKs, addressFEew0dn, uintVcCxpWI, {from: accounts[2]});
		const boolmkDXZfu = await LayerxchJNUT5.setIsPaused.call(boolTDm3ftW, {from: accounts[5]});
		const addressdYyQr2A = await LayerxchJNUT5.transferOwnership.call(addressGcPXqKE, {from: accounts[4]});
		const uintuM8IUWo = await LayerxchJNUT5.balanceOf.call(addresso1wrEZX, {from: accounts[5]});

		await expect(LayerxchJNUT5.transferFrom.call(addressA2ZeRKs, addressFEew0dn, uintVcCxpWI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressArKSl9 = accounts[3]
		const LayerxkNvdLb1 = await Layerx.new(addressArKSl9, {from: accounts[2]});
		const byteRZN7aMo = "0x050c0c081e151118060512010d1b"
		const uintA5fJZfE = BigInt("1192")
		const addresswzMqjPj = "0x0000000000000000000000000000000000000001"
		const boolBKR5cYs = await LayerxkNvdLb1.approveAndCall.call(addresswzMqjPj, uintA5fJZfE, byteRZN7aMo, {from: accounts[0]});
		await LayerxkNvdLb1.unlock.call({from: accounts[3]});

		await expect(LayerxkNvdLb1.approveAndCall.call(addresswzMqjPj, uintA5fJZfE, byteRZN7aMo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressbY9C8oY = accounts[0]
		const LayerxWiwa3K0 = await Layerx.new(addressbY9C8oY, {from: accounts[0]});
		const uintVBqguWi = BigInt("138")
		const uinty4Cq9ou = await LayerxWiwa3K0.getStakesNum.call({from: accounts[5]});
		const uintqiWW13A = await LayerxWiwa3K0.lock.call(uintVBqguWi, {from: accounts[0]});
		await LayerxWiwa3K0.unlock.call({from: accounts[0]});

		assert.equal(uinty4Cq9ou, BigInt("1"))
		await expect(LayerxWiwa3K0.lock.call(uintVBqguWi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressdMnYZmU = accounts[0]
		const LayerxWiwa3K0 = await Layerx.new(addressdMnYZmU, {from: accounts[0]});
		const uinty4Cq9ou = await LayerxWiwa3K0.getStakesNum.call({from: accounts[5]});
		await LayerxWiwa3K0.unlock.call({from: accounts[0]});

		assert.equal(uinty4Cq9ou, BigInt("1"))
		await expect(LayerxWiwa3K0.unlock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressyIpRHms = accounts[0]
		const LayerxWiwa3K0 = await Layerx.new(addressyIpRHms, {from: accounts[0]});
		const uintnTxmQU9 = BigInt("125")
		const uinty4Cq9ou = await LayerxWiwa3K0.getStakesNum.call({from: accounts[5]});
		const uintERlFzR9 = await LayerxWiwa3K0.totalSupply.call({from: accounts[2]});
		const uintqiWW13A = await LayerxWiwa3K0.lock.call(uintnTxmQU9, {from: accounts[0]});
		await LayerxWiwa3K0.onlyOwner.call({from: accounts[1]});
		await LayerxWiwa3K0.unlock.call({from: accounts[0]});

		assert.equal(uintERlFzR9, BigInt("40000000000000000000000"))
		assert.equal(uinty4Cq9ou, BigInt("1"))
		await expect(LayerxWiwa3K0.lock.call(uintnTxmQU9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressPHnwQXp = accounts[0]
		const LayerxV80ITYc = await Layerx.new(addressPHnwQXp, {from: accounts[2]});
		const uintRl8wl2X = BigInt("1943")
		const addressSeLc5vC = accounts[0]
		const addresse5zQHq1 = accounts[0]
		const uintqbnpt7O = BigInt("1686")
		const uintRQKxDTV = BigInt("1776")
		await LayerxV80ITYc.addStakePayment.call({from: accounts[0]});
		const boolaqkjhBG = await LayerxV80ITYc.transferFrom.call(addresse5zQHq1, addressSeLc5vC, uintRl8wl2X, {from: accounts[2]});
		const uintgDzHQvl = await LayerxV80ITYc.withdraw.call(uintqbnpt7O, {from: accounts[1]});
		await LayerxV80ITYc.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});
		const uintDqYcp8 = await LayerxV80ITYc.exist.call(uintRQKxDTV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxV80ITYc.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszGpmMg6 = accounts[0]
		const LayerxWiwa3K0 = await Layerx.new(addresszGpmMg6, {from: accounts[0]});
		const addressoa1AnDF = accounts[5]
		const addressHBMIckw = accounts[4]
		const uintcbqMFTV = BigInt("1335")
		const uintBW5miH0 = BigInt("138")
		const uintAZLqDFc = await LayerxWiwa3K0.getStakesNum.call({from: accounts[2]});
		const uintn1xO4Iz = await LayerxWiwa3K0.allowance.call(addressHBMIckw, addressoa1AnDF, {from: accounts[0]});
		const uintDQMjFDN = await LayerxWiwa3K0.withdraw.call(uintcbqMFTV, {from: accounts[3]});
		const uinty4Cq9ou = await LayerxWiwa3K0.getStakesNum.call({from: accounts[5]});
		const uintqiWW13A = await LayerxWiwa3K0.lock.call(uintBW5miH0, {from: accounts[0]});
		await LayerxWiwa3K0.unlock.call({from: accounts[0]});

		assert.equal(uintAZLqDFc, BigInt("1"))
		assert.equal(uintn1xO4Iz, BigInt("0"))
		await expect(LayerxWiwa3K0.withdraw.call(uintcbqMFTV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressY0Oy0tF = accounts[5]
		const LayerxXMdSDX9 = await Layerx.new(addressY0Oy0tF, {from: accounts[0]});
		const addressFepSCFU = accounts[2]
		await LayerxXMdSDX9.paused.call({from: accounts[3]});
		const addressXoX6X9C = await LayerxXMdSDX9.transferOwnership.call(addressFepSCFU, {from: accounts[5]});

		await expect(LayerxXMdSDX9.paused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMC5nXh7 = accounts[0]
		const LayerxWiwa3K0 = await Layerx.new(addressMC5nXh7, {from: accounts[0]});
		const boolNDuQcX5 = true
		const addressgKqoknx = accounts[2]
		const uintfG8NmNl = BigInt("1742")
		const uintJ30n1D2 = BigInt("928")
		const addressaiHsy9u = accounts[2]
		const booloKQPj4a = await LayerxWiwa3K0.setIsPaused.call(boolNDuQcX5, {from: accounts[0]});
		const addressclJhuau = await LayerxWiwa3K0.setNewStakeCreator.call(addressgKqoknx, {from: accounts[3]});
		const uint256h9jhxx = await LayerxWiwa3K0.burn.call(uintfG8NmNl, {from: accounts[4]});
		await LayerxWiwa3K0.unlock.call({from: accounts[0]});
		const boolEG41Jl = await LayerxWiwa3K0.approve.call(addressaiHsy9u, uintJ30n1D2, {from: accounts[3]});

		await expect(LayerxWiwa3K0.setNewStakeCreator.call(addressgKqoknx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressR0ZDMGk = accounts[0]
		const LayerxV80ITYc = await Layerx.new(addressR0ZDMGk, {from: accounts[2]});
		const addressA7bXowx = accounts[1]
		const uintQREj48F = BigInt("1771")
		const addressO1B96Du = accounts[1]
		const uintFqGVUIR = BigInt("1943")
		const addressjB5cIif = accounts[0]
		const addressfC01NKW = accounts[0]
		const uintCevWvM = BigInt("1776")
		await LayerxV80ITYc.addStakePayment.call({from: accounts[0]});
		const uintZdA42TC = await LayerxV80ITYc.balanceOf.call(addressA7bXowx, {from: "0x0000000000000000000000000000000000000001"});
		const boolIA0lybn = await LayerxV80ITYc.approve.call(addressO1B96Du, uintQREj48F, {from: accounts[1]});
		const boolaqkjhBG = await LayerxV80ITYc.transferFrom.call(addressfC01NKW, addressjB5cIif, uintFqGVUIR, {from: accounts[2]});
		await LayerxV80ITYc.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});
		const uintDqYcp8 = await LayerxV80ITYc.exist.call(uintCevWvM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxV80ITYc.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address4Ll5js = accounts[0]
		const LayerxWiwa3K0 = await Layerx.new(address4Ll5js, {from: accounts[0]});
		const uint8pHuiK = BigInt("1527")
		const addressYpYiY0G = "0x0000000000000000000000000000000000000001"
		const uintffysc7 = BigInt("1147")
		const addressp52GZHa = accounts[3]
		const uinty4Cq9ou = await LayerxWiwa3K0.getStakesNum.call({from: accounts[5]});
		const boolPwYNfGg = await LayerxWiwa3K0.approve.call(addressYpYiY0G, uint8pHuiK, {from: accounts[2]});
		await LayerxWiwa3K0.f.call({from: accounts[2]});
		await LayerxWiwa3K0.unlock.call({from: accounts[0]});
		const boolANkJeSL = await LayerxWiwa3K0.approve.call(addressp52GZHa, uintffysc7, {from: accounts[4]});

		assert.equal(boolPwYNfGg, true)
		assert.equal(uinty4Cq9ou, BigInt("1"))
		await expect(LayerxWiwa3K0.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMe53wI3 = accounts[0]
		const LayerxWiwa3K0 = await Layerx.new(addressMe53wI3, {from: accounts[0]});
		const boolNDuQcX5 = true
		const addressQtcMPgu = accounts[0]
		const addressRU7t23c = accounts[2]
		const booloKQPj4a = await LayerxWiwa3K0.setIsPaused.call(boolNDuQcX5, {from: accounts[0]});
		const uintWptG7EX = await LayerxWiwa3K0.balanceOf.call(addressQtcMPgu, {from: accounts[5]});
		const addresssvn6gUp = await LayerxWiwa3K0.setNewStakeCreator.call(addressRU7t23c, {from: accounts[0]});
		await LayerxWiwa3K0.unlock.call({from: accounts[0]});

		assert.equal(uintWptG7EX, BigInt("40000000000000000000000"))
		await expect(LayerxWiwa3K0.unlock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressysCYqbr = accounts[3]
		const LayerxIijaxYL = await Layerx.new(addressysCYqbr, {from: "0x0000000000000000000000000000000000000001"});
		const addressTBK7MD2 = accounts[5]
		const uintzFIzVYd = BigInt("1")
		const addressyqVVJOK = accounts[0]
		const uintKAErhvi = BigInt("455")
		const addressE4OvRIl = accounts[2]
		const uintE2uE3UL = await LayerxIijaxYL.balanceOf.call(addressTBK7MD2, {from: accounts[4]});
		const boolCIQ1epk = await LayerxIijaxYL.approve.call(addressyqVVJOK, uintzFIzVYd, {from: accounts[0]});
		const boolYRTGANh = await LayerxIijaxYL.transfer.call(addressE4OvRIl, uintKAErhvi, {from: accounts[4]});
	});

	it('test for Layerx', async () => {
		const addressZOHzizf = accounts[0]
		const LayerxWiwa3K0 = await Layerx.new(addressZOHzizf, {from: accounts[0]});
		const uintE5pFmph = BigInt("2022")
		const addresszHlfQf3 = accounts[0]
		const uintmNikNSu = BigInt("0")
		const boolW28DObu = await LayerxWiwa3K0.transfer.call(addresszHlfQf3, uintE5pFmph, {from: accounts[0]});
		const uintaY58Dyi = await LayerxWiwa3K0.lock.call(uintmNikNSu, {from: accounts[0]});
		await LayerxWiwa3K0.addStakePayment.call({from: accounts[0]});

		assert.equal(boolW28DObu, true)
		await expect(LayerxWiwa3K0.lock.call(uintmNikNSu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfW9tpG9 = accounts[0]
		const LayerxWiwa3K0 = await Layerx.new(addressfW9tpG9, {from: accounts[0]});
		const addressWJH64Hv = accounts[3]
		const uintlCamIwA = BigInt("190")
		const addresscGfwlf8 = accounts[0]
		const addressf5l9rIE = await LayerxWiwa3K0.transferOwnership.call(addressWJH64Hv, {from: accounts[0]});
		const booleRN5SKU = await LayerxWiwa3K0.transfer.call(addresscGfwlf8, uintlCamIwA, {from: accounts[3]});
		await LayerxWiwa3K0.unlock.call({from: accounts[0]});

		await expect(LayerxWiwa3K0.transfer.call(addresscGfwlf8, uintlCamIwA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUGtP6q = accounts[1]
		const LayerxY9FaVRO = await Layerx.new(addressUGtP6q, {from: accounts[3]});
		const uintPiKLnit = BigInt("1323")
		const uintiDWFPrf = BigInt("954")
		const uintCtLL0NE = BigInt("1222")
		const addressQkCCey = accounts[2]
		const addressYWnm9YH = "0x0000000000000000000000000000000000000001"
		const uint256z90KKH = await LayerxY9FaVRO.burn.call(uintPiKLnit, {from: accounts[1]});
		const uintq8dZsk = await LayerxY9FaVRO.exist.call(uintiDWFPrf, {from: accounts[2]});
		const uintykszK0W = await LayerxY9FaVRO.exist.call(uintCtLL0NE, {from: accounts[4]});
		const uintXHRLvBP = await LayerxY9FaVRO.allowance.call(addressYWnm9YH, addressQkCCey, {from: accounts[3]});
		const uintoFXZjXE = await LayerxY9FaVRO.getStakesNum.call({from: accounts[3]});

		await expect(LayerxY9FaVRO.exist.call(uintiDWFPrf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})