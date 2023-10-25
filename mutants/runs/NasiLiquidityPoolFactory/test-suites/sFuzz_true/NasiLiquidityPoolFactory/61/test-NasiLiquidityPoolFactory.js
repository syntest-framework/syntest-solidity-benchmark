const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringrtYpieq = "fw3umcxjkAc7d9bilFefq21Fuog9EUbYos7mEwJjklpaKGJLb4Ujcqn0C5GTGHPOExUIiTJBG"
		const stringNhku2oO = "aejLO3P8xa23C9HVknfVDrmMl2MW74HTOtRDQmDwJ0qWW2bq4Q3CTfMU15RynrudAu4p5cm6dJxL1DA8izOjdiwSVMewq5Y3A"
		const uintlp0E73 = BigInt("157")
		const NasiLiquidityPoolFactoryaMN2iUQ = await NasiLiquidityPoolFactory.new(stringrtYpieq, stringNhku2oO, uintlp0E73, {from: accounts[5]});
		const boolGisfoj = false
		const uintZSRZttn = BigInt("223")
		const uintThlMuM7 = BigInt("1910")
		const addressXx9bGRv = accounts[1]
		const addresss5FcOkZ = accounts[4]
		const addressm2vGMBe = accounts[0]
		const addressOhooUX5 = accounts[1]
		const addressJInBdvp = accounts[2]
		const uint256YDXdCos = await NasiLiquidityPoolFactoryaMN2iUQ.setAllocationPoint.call(uintThlMuM7, uintZSRZttn, boolGisfoj, {from: accounts[2]});
		const boolfBAnoAi = await NasiLiquidityPoolFactoryaMN2iUQ.isPauser.call(addressXx9bGRv, {from: "0x0000000000000000000000000000000000000001"});
		const addressjDFMGa = await NasiLiquidityPoolFactoryaMN2iUQ.addPauser.call(addresss5FcOkZ, {from: accounts[0]});
		const addressP9GAvuk = await NasiLiquidityPoolFactoryaMN2iUQ._delegate.call(addressOhooUX5, addressm2vGMBe, {from: accounts[1]});
		const boolamVgRZq = await NasiLiquidityPoolFactoryaMN2iUQ.isPauser.call(addressJInBdvp, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressg5V6qKh = accounts[0]
		const addressEMMMqnL = accounts[5]
		const uintZu3hk7R = BigInt("221")
		const uintSB4nkeT = BigInt("690")
		const NasiLiquidityPoolFactoryE4Bjfzd = await NasiLiquidityPoolFactory.new(addressg5V6qKh, addressEMMMqnL, uintZu3hk7R, uintSB4nkeT, {from: accounts[1]});
		const uintxt3XD7L = BigInt("1655")
		const uintk0cZ8AM = BigInt("1731")
		const uintjOoyPxn = BigInt("814")
		const uint7P3HQY = BigInt("489")
		const uint256gIsiYJ = await NasiLiquidityPoolFactoryE4Bjfzd.withdraw.call(uintk0cZ8AM, uintxt3XD7L, {from: accounts[3]});
		const uint256egoRQoK = await NasiLiquidityPoolFactoryE4Bjfzd.deposit.call(uint7P3HQY, uintjOoyPxn, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresszrIjRGf = accounts[1]
		const addressfiFunBU = accounts[3]
		const uintlFsr5qp = BigInt("1243")
		const uintpzs7WyK = BigInt("1152")
		const NasiLiquidityPoolFactoryYTOep3Q = await NasiLiquidityPoolFactory.new(addresszrIjRGf, addressfiFunBU, uintlFsr5qp, uintpzs7WyK, {from: accounts[2]});
		const booltyxIQrB = true
		const uinto4NWUHT = BigInt("903")
		const uintZYDguzU = BigInt("918")
		const uintUlJGzKg = BigInt("401")
		const addressaRilKoA = accounts[2]
		const uint256r4is3Tw = await NasiLiquidityPoolFactoryYTOep3Q.setAllocationPoint.call(uintZYDguzU, uinto4NWUHT, booltyxIQrB, {from: accounts[3]});
		const boolrT8slrH = await NasiLiquidityPoolFactoryYTOep3Q.approve.call(addressaRilKoA, uintUlJGzKg, {from: accounts[2]});
		const boolJk8FVMC = await NasiLiquidityPoolFactoryYTOep3Q.isOwner.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressODUhYG7 = accounts[4]
		const addressKUkjMMW = accounts[0]
		const uintCk74HEh = BigInt("56")
		const uintUjSZfXU = BigInt("299")
		const NasiLiquidityPoolFactoryvnPCsxK = await NasiLiquidityPoolFactory.new(addressODUhYG7, addressKUkjMMW, uintCk74HEh, uintUjSZfXU, {from: accounts[0]});
		const uintswiN19h = BigInt("1191")
		const addressegepZXQ = accounts[0]
		const uintPhGc177 = BigInt("1411")
		const addressjWLXcMr = accounts[3]
		const boolmlFaddl = await NasiLiquidityPoolFactoryvnPCsxK.mint.call(addressegepZXQ, uintswiN19h, {from: accounts[4]});
		await NasiLiquidityPoolFactoryvnPCsxK.massUpdatePools.call({from: accounts[0]});
		const boolLjx9HT5 = await NasiLiquidityPoolFactoryvnPCsxK.transfer.call(addressjWLXcMr, uintPhGc177, {from: accounts[3]});
		const boolkIc5PIl = await NasiLiquidityPoolFactoryvnPCsxK.isOwner.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringx3PGQuh = "xL3hjSzSllue85lR2MAtfKebmBu9pEUT0pVYHTJkWCWtMyATGK"
		const stringpMDIjxp = "imvP3JSOSlRVKtWT7ECtafDwrjClgSOyGUw7bOWh3"
		const uintYOvaFgg = BigInt("59")
		const NasiLiquidityPoolFactoryffQMLIB = await NasiLiquidityPoolFactory.new(stringx3PGQuh, stringpMDIjxp, uintYOvaFgg, {from: accounts[0]});
		const uintrobut4s = BigInt("1625")
		const addressXwsYV6F = accounts[1]
		const uintwlubw6d = BigInt("399")
		const addressmjIDB7 = "0x0000000000000000000000000000000000000001"
		const uint256geMCmYs = await NasiLiquidityPoolFactoryffQMLIB.migrate.call(uintrobut4s, {from: accounts[2]});
		const addressZkpBM4h = await NasiLiquidityPoolFactoryffQMLIB.addMinter.call(addressXwsYV6F, {from: accounts[0]});
		const uint256bSISYT = await NasiLiquidityPoolFactoryffQMLIB.getPriorVotes.call(addressmjIDB7, uintwlubw6d, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresspeO6QKn = accounts[2]
		const addressfyf9xKv = "0x0000000000000000000000000000000000000001"
		const uintH6z0ceo = BigInt("1115")
		const uintJSBIUiK = BigInt("78")
		const NasiLiquidityPoolFactorycAPuF5x = await NasiLiquidityPoolFactory.new(addresspeO6QKn, addressfyf9xKv, uintH6z0ceo, uintJSBIUiK, {from: accounts[3]});
		const addressusKVuhs = accounts[3]
		const uintlLMW19q = BigInt("1840")
		const uintdzyO3GA = BigInt("269")
		const addressc0EQFom = "0x0000000000000000000000000000000000000001"
		const addressKzOdSJ = accounts[2]
		const uint256w6BQ64b = await NasiLiquidityPoolFactorycAPuF5x.pendingNasi.call(uintlLMW19q, addressusKVuhs, {from: accounts[0]});
		const boolECl5hhz = await NasiLiquidityPoolFactorycAPuF5x.approve.call(addressc0EQFom, uintdzyO3GA, {from: accounts[1]});
		const uint256C1D8ebE = await NasiLiquidityPoolFactorycAPuF5x.totalSupply.call({from: accounts[4]});
		const addressRBa8x3y = await NasiLiquidityPoolFactorycAPuF5x.dev.call(addressKzOdSJ, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringAehKNlg = "t2SsJC7UsvXXKxEzCp2EzTcj4JcAERJ1IsjK48szlOunYTGdm9lpf"
		const stringnrk0zAv = "Xie3jQAjcUlClwAyqQkMG3azzb5e3AIkgC8MbAlQk43nP"
		const uintyjOIfUI = BigInt("135")
		const NasiLiquidityPoolFactoryMO9mU6q = await NasiLiquidityPoolFactory.new(stringAehKNlg, stringnrk0zAv, uintyjOIfUI, {from: accounts[2]});
		const uintH5eh0Tp = BigInt("890")
		const addressxH1o8ER = accounts[1]
		const uintQZ4qe3S = BigInt("991")
		const addressYFZCyA = accounts[4]
		const addressACJuqqa = await NasiLiquidityPoolFactoryMO9mU6q.burnFrom.call(addressxH1o8ER, uintH5eh0Tp, {from: accounts[5]});
		const boollgNiBHU = await NasiLiquidityPoolFactoryMO9mU6q.transfer.call(addressYFZCyA, uintQZ4qe3S, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringQnT1V5U = "FvVVPXHJdLdn8czmeFZDQM7So1Mm7l5GltLABF1WmIwurnCDDYuq8g10hLPKPvsv"
		const stringI1Od6uZ = "pvMK"
		const uintGWpvh8N = BigInt("122")
		const NasiLiquidityPoolFactoryoMPdAgV = await NasiLiquidityPoolFactory.new(stringQnT1V5U, stringI1Od6uZ, uintGWpvh8N, {from: accounts[1]});
		const addressyqvYjnQ = accounts[1]
		const uintVa0ouBG = BigInt("551")
		const uintihWfPiW = BigInt("939")
		const addressKM50Ggh = accounts[1]
		const uintC4V8laq = BigInt("1690")
		const addressYRQVaW5 = "0x0000000000000000000000000000000000000001"
		const address6zDUZx = accounts[4]
		await NasiLiquidityPoolFactoryoMPdAgV.renouncePauser.call({from: accounts[0]});
		const uint256JdEL5a = await NasiLiquidityPoolFactoryoMPdAgV.balanceOf.call(addressyqvYjnQ, {from: accounts[5]});
		const uint256rQkS79h = await NasiLiquidityPoolFactoryoMPdAgV.enterStaking.call(uintVa0ouBG, {from: accounts[1]});
		const uint256zV5yneJ = await NasiLiquidityPoolFactoryoMPdAgV.getPriorVotes.call(addressKM50Ggh, uintihWfPiW, {from: accounts[1]});
		const boolYLq4eIE = await NasiLiquidityPoolFactoryoMPdAgV.transferFrom.call(address6zDUZx, addressYRQVaW5, uintC4V8laq, {from: accounts[0]});
		await NasiLiquidityPoolFactoryoMPdAgV.unpause.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringfSP5rFa = "h79uwKbwNJhm9Jb4JojmUZjjcWHXiA3EuyApg4lU7hhDBE5Y35gj8Bf87zUwR3eB"
		const stringsd89YWc = "LCxvq9ciUL5Utxn7ik4swV3SvRQxOf4sci6fd"
		const uintFLeSg30 = BigInt("170")
		const NasiLiquidityPoolFactoryyAkO1yj = await NasiLiquidityPoolFactory.new(stringfSP5rFa, stringsd89YWc, uintFLeSg30, {from: accounts[4]});
		const uintOjtJjZ8 = BigInt("1702")
		await NasiLiquidityPoolFactoryyAkO1yj.pause.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryyAkO1yj.renounceMinter.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryyAkO1yj.onlyOwner.call({from: accounts[3]});
		const boolMZiQVL = await NasiLiquidityPoolFactoryyAkO1yj.paused.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryyAkO1yj.whenNotPaused.call({from: accounts[0]});
		const uint256Yc8qKc = await NasiLiquidityPoolFactoryyAkO1yj.burn.call(uintOjtJjZ8, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresskWuDnln = accounts[0]
		const addressTXgygHe = accounts[5]
		const uintMFGC1ZQ = BigInt("221")
		const uintSlx7hj = BigInt("690")
		const NasiLiquidityPoolFactoryE4Bjfzd = await NasiLiquidityPoolFactory.new(addresskWuDnln, addressTXgygHe, uintMFGC1ZQ, uintSlx7hj, {from: accounts[1]});
		const uintvN6oqvo = BigInt("814")
		const uintzk8yR6m = BigInt("489")
		const uint256egoRQoK = await NasiLiquidityPoolFactoryE4Bjfzd.deposit.call(uintzk8yR6m, uintvN6oqvo, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringKJTOky3 = "6BJU2s9AtBj57Ls9uCu8WYP3n9Vkwl8"
		const stringSXrRf2V = "eXRoOo6nxxKlHK"
		const uintoeyRRUb = BigInt("129")
		const NasiLiquidityPoolFactoryx1BRB1u = await NasiLiquidityPoolFactory.new(stringKJTOky3, stringSXrRf2V, uintoeyRRUb, {from: accounts[2]});
		const addressbyABJYL = accounts[0]
		const addressPCQl11b = accounts[4]
		const uintGFi7RGG = BigInt("435")
		const uintUtRoZc = BigInt("762")
		const uintuh78Wc0 = BigInt("345")
		const addressfTzykaK = accounts[0]
		const uint256boisVZI = await NasiLiquidityPoolFactoryx1BRB1u.getCurrentVotes.call(addressbyABJYL, {from: accounts[3]});
		const uint256GkOy9RL = await NasiLiquidityPoolFactoryx1BRB1u.getCurrentVotes.call(addressPCQl11b, {from: accounts[0]});
		const 
xHH2ync = await NasiLiquidityPoolFactoryx1BRB1u._writeCheckpoint.call(addressfTzykaK, uintuh78Wc0, uintUtRoZc, uintGFi7RGG, {from: accounts[2]});
		const uint8JS8jqa = await NasiLiquidityPoolFactoryx1BRB1u.decimals.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringso79NMc = "ghEabiuaVllyIjAqQOocWBQTuvN8cUf981hyT7KHSWjNp69ru5xVGDQC87MB0eldWR98VSCXtXL1tO3OiTQe"
		const stringvMcrikP = "4icItyoAEVOc5R7gfcLkAt"
		const uintSsCYSQ = BigInt("217")
		const NasiLiquidityPoolFactoryW6aVab9 = await NasiLiquidityPoolFactory.new(stringso79NMc, stringvMcrikP, uintSsCYSQ, {from: accounts[0]});
		const addressyK7EgAZ = "0x0000000000000000000000000000000000000001"
		const bool6NHrhh = await NasiLiquidityPoolFactoryW6aVab9.isOwner.call({from: accounts[4]});
		const boolQoA8SVN = await NasiLiquidityPoolFactoryW6aVab9.isMinter.call(addressyK7EgAZ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressL5ZuPNu = accounts[0]
		const addressiczWHqR = accounts[5]
		const uintUomnpzA = BigInt("221")
		const uintgW0n5KA = BigInt("690")
		const NasiLiquidityPoolFactoryE4Bjfzd = await NasiLiquidityPoolFactory.new(addressL5ZuPNu, addressiczWHqR, uintUomnpzA, uintgW0n5KA, {from: accounts[1]});
		const uintvdERwnK = BigInt("1181")
		const uintQtzs9TT = BigInt("1550")
		const uintDTsrIEz = BigInt("1729")
		const uinthvyz5Tu = BigInt("1783")
		const uint256FzUppIh = await NasiLiquidityPoolFactoryE4Bjfzd.emergencyWithdraw.call(uintvdERwnK, {from: accounts[2]});
		const uint256gIsiYJ = await NasiLiquidityPoolFactoryE4Bjfzd.withdraw.call(uintDTsrIEz, uintQtzs9TT, {from: accounts[3]});
		await NasiLiquidityPoolFactoryE4Bjfzd.whenNotPaused.call({from: accounts[4]});
		const uint256B8k1ibT = await NasiLiquidityPoolFactoryE4Bjfzd.emergencyWithdraw.call(uinthvyz5Tu, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringONO1wIB = "DHv1Aum4zcgod6c0XIGhOamHCmxdHU6qQncydvw9DnHjFXcScaQAuM8cD2ByQLvQ5rekqoPbxtLFnLGxDgBFwO4zMxRV7"
		const stringvczDOGv = "b6HTfOvCFXDVMtKT5uz4ok7xzpeHM23mWjNfYulWblTEpIxWmgoKT89eLZ48gqulvOvx5nSkywwFGDQ6RZSXye6FT5"
		const uintO2fAecU = BigInt("46")
		const NasiLiquidityPoolFactoryqQJU9P6 = await NasiLiquidityPoolFactory.new(stringONO1wIB, stringvczDOGv, uintO2fAecU, {from: accounts[2]});
		const uintLzswyvR = BigInt("1294")
		const boolsLgvNOB = false
		const addressBr56m3 = accounts[3]
		const uintfIypr7v = BigInt("833")
		const uinttvhNd8o = BigInt("1510")
		const addressVRCdQ3a = accounts[2]
		const uint256C8vKg6P = await NasiLiquidityPoolFactoryqQJU9P6.enterStaking.call(uintLzswyvR, {from: accounts[0]});
		await NasiLiquidityPoolFactoryqQJU9P6.whenNotPaused.call({from: accounts[0]});
		const uint256UIxLA5W = await NasiLiquidityPoolFactoryqQJU9P6.addLpToken.call(uintfIypr7v, addressBr56m3, boolsLgvNOB, {from: accounts[1]});
		const uint256eBziKiw = await NasiLiquidityPoolFactoryqQJU9P6.leaveStaking.call(uinttvhNd8o, {from: accounts[3]});
		const uint256xADyPT = await NasiLiquidityPoolFactoryqQJU9P6.balanceOf.call(addressVRCdQ3a, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringsIoGpjc = "i5mQTYHopxUBI58ykXYdcPbYljNEGREFdZcbZ4dEKeR4jb9dNuOizPatAF27tNRxaiSJAN29TcWO494jzS69nVg"
		const stringzrbOVRi = "JmpqeiDFxX8iBnKLy5LQpksubJ9vBlsG2HBTaxHHExvqWvTqDllGbT5LskfgL6cwyCueMQ2M"
		const uintkOyy05S = BigInt("230")
		const NasiLiquidityPoolFactoryB2dMeig = await NasiLiquidityPoolFactory.new(stringsIoGpjc, stringzrbOVRi, uintkOyy05S, {from: accounts[5]});
		const addressvBx6SiN = accounts[2]
		const addressdbkltsP = accounts[1]
		const addressWmoq7U = accounts[1]
		const addresseN5eh9B = accounts[3]
		const addressiSHDZK = await NasiLiquidityPoolFactoryB2dMeig.setMigrator.call(addressvBx6SiN, {from: accounts[3]});
		const boolFhcSqUM = await NasiLiquidityPoolFactoryB2dMeig.isMinter.call(addressdbkltsP, {from: accounts[3]});
		const addressxFhIu04 = await NasiLiquidityPoolFactoryB2dMeig.delegates.call(addressWmoq7U, {from: "0x0000000000000000000000000000000000000001"});
		const addressxpFQYJg = await NasiLiquidityPoolFactoryB2dMeig.addMinter.call(addresseN5eh9B, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressJnDrEyg = accounts[0]
		const addressp1EjUJ = accounts[5]
		const uintyQNpdh6 = BigInt("221")
		const uintDdUjLCy = BigInt("690")
		const NasiLiquidityPoolFactoryE4Bjfzd = await NasiLiquidityPoolFactory.new(addressJnDrEyg, addressp1EjUJ, uintyQNpdh6, uintDdUjLCy, {from: accounts[1]});
		const uintCP67YvR = BigInt("17")
		const addresszmb4X62 = accounts[5]
		const uint256tfINByP = await NasiLiquidityPoolFactoryE4Bjfzd.migrate.call(uintCP67YvR, {from: accounts[2]});
		const boolgUQqac1 = await NasiLiquidityPoolFactoryE4Bjfzd.isPauser.call(addresszmb4X62, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringuUOcTyD = "KSZIf2J4DgeU5FsVwfZ3vTUN9d6LIHpzqi9BRQ9wITCPqgEqtnR4UqLl1T2kK4"
		const stringEORT0nH = "YI4BTubA3A1NwskMtusinfrVStzaoe8wCjrC7tMUFBGIY4VejCBlUTNxdk"
		const uintWirUXJ = BigInt("233")
		const NasiLiquidityPoolFactoryBchdO7O = await NasiLiquidityPoolFactory.new(stringuUOcTyD, stringEORT0nH, uintWirUXJ, {from: accounts[3]});
		const uintW3WJ79v = BigInt("345")
		const addressIqV49p = accounts[3]
		const uintQLgT2ZF = BigInt("1203")
		const uintmqT8V9R = BigInt("1150")
		const uintn0X1HDP = BigInt("866")
		const addressaqWUSMf = accounts[2]
		const boolGdrUhAz = true
		const uintNvycad = BigInt("1437")
		const uintuM4dE1 = BigInt("722")
		const boolTu9jT9 = await NasiLiquidityPoolFactoryBchdO7O.approve.call(addressIqV49p, uintW3WJ79v, {from: accounts[4]});
		const 
Xv7LcW = await NasiLiquidityPoolFactoryBchdO7O._writeCheckpoint.call(addressaqWUSMf, uintn0X1HDP, uintmqT8V9R, uintQLgT2ZF, {from: accounts[4]});
		const uint256ctVoSkE = await NasiLiquidityPoolFactoryBchdO7O.setAllocationPoint.call(uintuM4dE1, uintNvycad, boolGdrUhAz, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJBWo0G = "5nllM0olQpWqf0UYGzAhvkYk5Y5ll0lVEN4LtDm23HGcISHsbvALmxUR18"
		const stringE4BminB = "dJFIchHXPUoBMDAx3WicpsJvsY6lzNLIlTq7y7uGlyRyYBWxjd1"
		const uintvlQbAvc = BigInt("18")
		const NasiLiquidityPoolFactoryjxS2L1 = await NasiLiquidityPoolFactory.new(stringJBWo0G, stringE4BminB, uintvlQbAvc, {from: accounts[3]});
		const uintyo5mZhb = BigInt("859")
		const addressRvk9uqv = accounts[3]
		const addressQolLMEQ = accounts[5]
		const addressOQV9Ibd = accounts[3]
		const uintkXX8Ooe = BigInt("1255")
		const address5tFHLq = accounts[3]
		const uintsMHU7PF = BigInt("825")
		const boolOCR4iiA = await NasiLiquidityPoolFactoryjxS2L1.transferFrom.call(addressQolLMEQ, addressRvk9uqv, uintyo5mZhb, {from: accounts[1]});
		const addressIUcxbh = await NasiLiquidityPoolFactoryjxS2L1.addMinter.call(addressOQV9Ibd, {from: accounts[4]});
		const boolfG0yQi4 = await NasiLiquidityPoolFactoryjxS2L1.increaseAllowance.call(address5tFHLq, uintkXX8Ooe, {from: accounts[0]});
		const uint256lYAJACH = await NasiLiquidityPoolFactoryjxS2L1.leaveStaking.call(uintsMHU7PF, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringGrC5MVY = "LPsSiz3wp4vvO8"
		const string3gpduz = "at9kySCgHlB2n6ncw2R4BJDFRO6GMx2VI"
		const uintjEVuU0 = BigInt("184")
		const NasiLiquidityPoolFactoryEyXF7c1 = await NasiLiquidityPoolFactory.new(stringGrC5MVY, string3gpduz, uintjEVuU0, {from: accounts[2]});
		const boolfCrUV1f = false
		const uintzGDCbKW = BigInt("1594")
		const uintDAnlTvZ = BigInt("2041")
		const addresstuPONXp = accounts[5]
		const uintnLOpbht = BigInt("113")
		const addressJZQIXHA = accounts[0]
		const uint256M0i6Srs = await NasiLiquidityPoolFactoryEyXF7c1.setAllocationPoint.call(uintDAnlTvZ, uintzGDCbKW, boolfCrUV1f, {from: accounts[1]});
		await NasiLiquidityPoolFactoryEyXF7c1.onlyPauser.call({from: accounts[0]});
		const addressbONqHk0 = await NasiLiquidityPoolFactoryEyXF7c1.dev.call(addresstuPONXp, {from: "0x0000000000000000000000000000000000000001"});
		const addressuyJFKQo = await NasiLiquidityPoolFactoryEyXF7c1.burnFrom.call(addressJZQIXHA, uintnLOpbht, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressEAzjUmp = accounts[0]
		const addressXDkxxqZ = accounts[5]
		const uintERqNeoN = BigInt("221")
		const uintOIeZ3cj = BigInt("690")
		const NasiLiquidityPoolFactoryE4Bjfzd = await NasiLiquidityPoolFactory.new(addressEAzjUmp, addressXDkxxqZ, uintERqNeoN, uintOIeZ3cj, {from: accounts[1]});
		const addressFspGyml = accounts[5]
		await NasiLiquidityPoolFactoryE4Bjfzd.massUpdatePools.call({from: accounts[1]});
		const boolgUQqac1 = await NasiLiquidityPoolFactoryE4Bjfzd.isPauser.call(addressFspGyml, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresshXiORT = accounts[0]
		const addressJfyr16d = accounts[5]
		const uintSKTIK67 = BigInt("221")
		const uintrdQm1DK = BigInt("690")
		const NasiLiquidityPoolFactoryE4Bjfzd = await NasiLiquidityPoolFactory.new(addresshXiORT, addressJfyr16d, uintSKTIK67, uintrdQm1DK, {from: accounts[1]});
		const uintCbuyxbS = BigInt("358")
		const uintwZrqTkT = BigInt("807")
		const uintCWcFNV5 = BigInt("808")
		const addressMK5CSKA = "0x0000000000000000000000000000000000000001"
		const addressHBxEpXl = accounts[3]
		const uintD9ukYb6 = BigInt("800")
		const uintYIu5ibG = BigInt("489")
		const uint256hQtBxa7 = await NasiLiquidityPoolFactoryE4Bjfzd.leaveStaking.call(uintCbuyxbS, {from: accounts[1]});
		const uint256LbPDR3 = await NasiLiquidityPoolFactoryE4Bjfzd.withdraw.call(uintCWcFNV5, uintwZrqTkT, {from: "0x0000000000000000000000000000000000000001"});
		const addressUdPHmbY = await NasiLiquidityPoolFactoryE4Bjfzd.addPauser.call(addressMK5CSKA, {from: accounts[5]});
		const addressN186bv = await NasiLiquidityPoolFactoryE4Bjfzd.addMinter.call(addressHBxEpXl, {from: accounts[0]});
		const uint256egoRQoK = await NasiLiquidityPoolFactoryE4Bjfzd.deposit.call(uintYIu5ibG, uintD9ukYb6, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringlXQ8dRi = "8JWbhG0dT1mPaFuXuFXTEryWoHWXV1MwlNTxrhQF7GnkaAwxeRAiAXHDWsjPSAEc"
		const stringNBDuZh8 = ""
		const uintsO8tYuj = BigInt("244")
		const NasiLiquidityPoolFactoryAqhoj3K = await NasiLiquidityPoolFactory.new(stringlXQ8dRi, stringNBDuZh8, uintsO8tYuj, {from: accounts[1]});
		const uintnBm1J00 = BigInt("294")
		const uinteTq8EVz = BigInt("943")
		const uintyMb7nOM = BigInt("2034")
		const uintvv1RTM7 = BigInt("1428")
		const uintnutBwMo = BigInt("545")
		const addressWS8RG0M = accounts[1]
		const uintCy2lAyj = BigInt("1262")
		const addressJN0qJmG = accounts[2]
		const addressumIbyKc = accounts[4]
		const uint256dIsyqNm = await NasiLiquidityPoolFactoryAqhoj3K.withdraw.call(uinteTq8EVz, uintnBm1J00, {from: accounts[1]});
		const 
jqUVaEz = await NasiLiquidityPoolFactoryAqhoj3K._writeCheckpoint.call(addressWS8RG0M, uintnutBwMo, uintvv1RTM7, uintyMb7nOM, {from: accounts[5]});
		const boolNErL9My = await NasiLiquidityPoolFactoryAqhoj3K.transferFrom.call(addressumIbyKc, addressJN0qJmG, uintCy2lAyj, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressp8zgwyH = accounts[0]
		const addressBpIkDk7 = accounts[5]
		const uintWQcRvBH = BigInt("221")
		const uintsak54an = BigInt("690")
		const NasiLiquidityPoolFactoryE4Bjfzd = await NasiLiquidityPoolFactory.new(addressp8zgwyH, addressBpIkDk7, uintWQcRvBH, uintsak54an, {from: accounts[1]});
		const uintJeJlYai = BigInt("1808")
		const uintMWBtmWE = BigInt("807")
		const uintZP4aNoW = BigInt("808")
		const uintb8oJvpM = BigInt("389")
		const addresseGENcqk = accounts[3]
		const addressg6TAEe = "0x0000000000000000000000000000000000000001"
		const uintfcIJdLG = BigInt("800")
		const uintvehij9s = BigInt("489")
		const uint256YIQoheo = await NasiLiquidityPoolFactoryE4Bjfzd.enterStaking.call(uintJeJlYai, {from: accounts[1]});
		const uint256LbPDR3 = await NasiLiquidityPoolFactoryE4Bjfzd.withdraw.call(uintZP4aNoW, uintMWBtmWE, {from: "0x0000000000000000000000000000000000000001"});
		const boolGdc6TCR = await NasiLiquidityPoolFactoryE4Bjfzd.approve.call(addresseGENcqk, uintb8oJvpM, {from: accounts[0]});
		const addressUdPHmbY = await NasiLiquidityPoolFactoryE4Bjfzd.addPauser.call(addressg6TAEe, {from: accounts[5]});
		const uint256egoRQoK = await NasiLiquidityPoolFactoryE4Bjfzd.deposit.call(uintvehij9s, uintfcIJdLG, {from: accounts[1]});
	});
})