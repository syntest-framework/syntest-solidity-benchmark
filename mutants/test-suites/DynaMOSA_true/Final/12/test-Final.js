const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringTg4YYK = "pEv4LWE1h3htesjUi4tgPFqVU2aFJo687jhkDdvi2VG94udBAzQxFczjkiHz7ankD6uh9icWgmjJwF9cHJKUTX2DYC"
		const stringf3i762L = "dqxAAcqUS5CoaGVstvNXCJl9NJLcyhYkSGsBld5ihRjGFXoMQrwlC41bsM8SoRtiIiG2We2lfZKFBhyFykmbQJ"
		const uintrF5eKsA = BigInt("143")
		const FinalPNsCDD0 = await Final.new(stringTg4YYK, stringf3i762L, uintrF5eKsA, {from: accounts[0]});
		const uintHl5H7Uc = BigInt("683")
		const addressNCazlPu = accounts[3]
		const addressAedQOJu = accounts[0]
		const uintQnoLem = BigInt("581")
		const addressAGiscvF = accounts[2]
		const uintetozGR = BigInt("954")
		const addressWaHccRf = accounts[4]
		const addressnappX7q = accounts[3]
//		const boolem42Ta = await FinalPNsCDD0.transferFrom.call(addressAedQOJu, addressNCazlPu, uintHl5H7Uc, {from: accounts[4]});
//		const uint8AaNve1a = await FinalPNsCDD0.decimals.call({from: accounts[0]});
//		const boolFUyXXaq = await FinalPNsCDD0.approveAndCall.call(addressAGiscvF, uintQnoLem, {from: accounts[4]});
//		const boolwpZO9qx = await FinalPNsCDD0.transferFrom.call(addressnappX7q, addressWaHccRf, uintetozGR, {from: accounts[5]});

		await expect(FinalPNsCDD0.transferFrom.call(addressAedQOJu, addressNCazlPu, uintHl5H7Uc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringjh0ZUq1 = "q6yV4UasZGIhGKYkvAXfeTIb38hFqrBMwuyOEZ0DPbbzg3qNiJfmbEMtHk8qAMLS0wONPSYi4uNo6pZz4IzJpgi"
		const stringzwokvOX = "eJJhyfkv9TB9uNtOECh9j46cjNKHH"
		const uintO6MEmle = BigInt("843")
		const Final7Msfbq = await Final.new(stringjh0ZUq1, stringzwokvOX, uintO6MEmle, {from: accounts[2]});
		const uintSL2nx2y = BigInt("490")
		const addressdX0oBO0 = accounts[3]
		const uintPZV8wLM = BigInt("894")
		const addressOuDfgtp = accounts[4]
		const addressZzL0Erk = accounts[0]
		const uintWcDaSRv = BigInt("1940")
		const addressQFGtze6 = accounts[3]
		const uintb83vbnP = BigInt("141")
		const addressxKUr8z5 = accounts[5]
		const addressFdM2mek = accounts[0]
//		const boolDLrmnJv = await Final7Msfbq.increaseAllowance.call(addressdX0oBO0, uintSL2nx2y, {from: accounts[0]});
//		const boolGo1YqAW = await Final7Msfbq.transferFrom.call(addressZzL0Erk, addressOuDfgtp, uintPZV8wLM, {from: "0x0000000000000000000000000000000000000001"});
//		const boolsVKOjhv = await Final7Msfbq.approveAndCall.call(addressQFGtze6, uintWcDaSRv, {from: accounts[1]});
//		const boolGd4tbMk = await Final7Msfbq.transferFrom.call(addressFdM2mek, addressxKUr8z5, uintb83vbnP, {from: accounts[0]});

		await expect(Final7Msfbq.increaseAllowance.call(addressdX0oBO0, uintSL2nx2y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringy4MN1S5 = "IhWDkFn087HkcLradjrsb6iikBQIdFkNHJcsMAcseubqlrVF31TqcmnrVufAWY5mIbJ3J9OAJ"
		const stringChgWMsh = "S2wuL1Dvz2J3cg2kyBiVYcxqGjm8cBNwMUXm8XiLgjLgSz8upB1kYQlgrueAwXuVQ8lkRX"
		const uintjyJccrM = BigInt("1267")
		const FinaloRueAgJ = await Final.new(stringy4MN1S5, stringChgWMsh, uintjyJccrM, {from: accounts[4]});
		const addressFR0SfGU = accounts[3]
		const uintWcPUNl = BigInt("164")
		const addressmIH2PA3 = "0x0000000000000000000000000000000000000001"
		const uintNtUlNaE = BigInt("726")
		const addressdkmpF8i = accounts[0]
		const addressvPUr6tx = accounts[2]
		const addressjSllKwA = accounts[1]
//		const booll5AnKWp = await FinaloRueAgJ.transferownership.call(addressFR0SfGU, {from: accounts[3]});
//		const stringXzPcIqR = await FinaloRueAgJ.name.call({from: accounts[3]});
//		const boolwzUb6Dc = await FinaloRueAgJ.approveAndCall.call(addressmIH2PA3, uintWcPUNl, {from: accounts[4]});
//		const boolLljYrt1 = await FinaloRueAgJ.transferFrom.call(addressvPUr6tx, addressdkmpF8i, uintNtUlNaE, {from: accounts[3]});
//		const uintgtomP4R = await FinaloRueAgJ.balanceOf.call(addressjSllKwA, {from: accounts[5]});
//		const stringc7PzyLy = await FinaloRueAgJ.symbol.call({from: accounts[0]});

		await expect(FinaloRueAgJ.transferownership.call(addressFR0SfGU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringyD0Dh2j = "H202Iidky4w"
		const stringCAZTYkJ = "L4akujDn7JfowSnwqO"
		const uintRAjBvAR = BigInt("1348")
		const FinalogO81K = await Final.new(stringyD0Dh2j, stringCAZTYkJ, uintRAjBvAR, {from: accounts[3]});
		const uintnFxzx1m = BigInt("1304")
		const addressEEqzDk = accounts[3]
		const uintlGUI7EC = BigInt("1209")
		const addressaaXPOT6 = accounts[0]
		const addressIBLxpjn = accounts[2]
		const uinthe7HMlE = BigInt("889")
		const addressARvfnCN = accounts[0]
		const uintGGRs8yh = BigInt("410")
		const addressb3fyucE = accounts[4]
//		const boolPoDmFXL = await FinalogO81K.transfer.call(addressEEqzDk, uintnFxzx1m, {from: accounts[1]});
//		const boolW1FyUAd = await FinalogO81K.transferFrom.call(addressIBLxpjn, addressaaXPOT6, uintlGUI7EC, {from: accounts[3]});
//		const boolf2tPqv6 = await FinalogO81K.approve.call(addressARvfnCN, uinthe7HMlE, {from: accounts[1]});
//		const booliPynLro = await FinalogO81K.transfer.call(addressb3fyucE, uintGGRs8yh, {from: accounts[4]});
//		const stringt41GBWw = await FinalogO81K.symbol.call({from: accounts[4]});

		await expect(FinalogO81K.transfer.call(addressEEqzDk, uintnFxzx1m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringfIhXXVW = "Wgewpm7Xw612mBklaHwChKhQjmAbLrTcOn8CafHsnVMkPMekJj7"
		const stringIah0EYo = "mMDrD0lwriik7CSv7TDtJrX9eKW6R2y2UM85UJMoGwHd5i22ImTPXSYvJ7QUwEoB6mmsLUEturS9W"
		const uintToEG11v = BigInt("5")
		const Finalntj49VH = await Final.new(stringfIhXXVW, stringIah0EYo, uintToEG11v, {from: accounts[0]});
		const uint0EO5H2 = BigInt("30")
		const addressYz0WexG = "0x0000000000000000000000000000000000000001"
		const uintH7oDUlq = BigInt("1801")
		const addressW8j8gt = accounts[2]
		const uintotwM1Xd = BigInt("1113")
		const addressloZlIk = accounts[4]
		const boolz6JBMSR = await Finalntj49VH.transfer.call(addressYz0WexG, uint0EO5H2, {from: accounts[0]});
//		const boolpHhzHdX = await Finalntj49VH.transfer.call(addressW8j8gt, uintH7oDUlq, {from: accounts[5]});
//		const boolX9wSOOJ = await Finalntj49VH.increaseAllowance.call(addressloZlIk, uintotwM1Xd, {from: accounts[3]});

		assert.equal(boolz6JBMSR, true)
		await expect(Finalntj49VH.transfer.call(addressW8j8gt, uintH7oDUlq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringCxcMNCP = "C1BlMpLCVBh7kLoDSP2N23urt8ajR6mW0J7y45ffkCOqDCsENHl"
		const stringAnkHSeC = "V5DLnxe7OWrNlXaNkuWq1"
		const uintfPo6qtP = BigInt("1414")
		const FinalDUVw1AJ = await Final.new(stringCxcMNCP, stringAnkHSeC, uintfPo6qtP, {from: accounts[0]});
		const uintpRgGXQI = BigInt("1471")
		const addressW2pnlKD = accounts[0]
		const uintEsjdWpb = BigInt("425")
		const addressolI3fL = accounts[4]
		const uintfBxp5l9 = BigInt("1705")
		const addressPlIPTtg = accounts[2]
		const addresswvgMOzL = accounts[3]
		const uintyhcI68M = BigInt("1827")
		const addressPGe2RHD = accounts[0]
		const address3Fz04R = accounts[0]
		const boole1GIEjW = await FinalDUVw1AJ.approve.call(addressW2pnlKD, uintpRgGXQI, {from: accounts[1]});
//		const booloNbsLL8 = await FinalDUVw1AJ.approveAndCall.call(addressolI3fL, uintEsjdWpb, {from: accounts[2]});
//		const boolMxvPxP = await FinalDUVw1AJ.transferFrom.call(addresswvgMOzL, addressPlIPTtg, uintfBxp5l9, {from: accounts[1]});
//		const boolHG1eWDO = await FinalDUVw1AJ.transferFrom.call(address3Fz04R, addressPGe2RHD, uintyhcI68M, {from: accounts[1]});

		assert.equal(boole1GIEjW, true)
		await expect(FinalDUVw1AJ.approveAndCall.call(addressolI3fL, uintEsjdWpb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringABGheq = "VhAWEMFt8l5XyrAYbzMtvTtpVJgxuHO5vQQmutN49A5"
		const stringBSvUkqB = "13PN7B3meWpdYKRDG7syBY3aEqrCsfP9kqf3UlbO3BdjJgysRpg3Az"
		const uinttT5l236 = BigInt("51")
		const FinalrlF3RCP = await Final.new(stringABGheq, stringBSvUkqB, uinttT5l236, {from: accounts[0]});
		const uint7sPBsx = BigInt("366")
		const addressNqiKsqv = accounts[3]
		const uintCnItgkV = BigInt("75")
		const addresspi69OMg = accounts[3]
		const boolKiMMnVE = await FinalrlF3RCP.approveAndCall.call(addressNqiKsqv, uint7sPBsx, {from: accounts[0]});
		const boolKgTlAy = await FinalrlF3RCP.transfer.call(addresspi69OMg, uintCnItgkV, {from: accounts[0]});

		assert.equal(boolKgTlAy, true)
		assert.equal(boolKiMMnVE, true)
	});

	it('test for Final', async () => {
		const stringfjC71Ny = "N1zgdyCIsJHziNXUQaR6gW2pWUgJadjFPYk"
		const stringFpgNUk = "wOrUFIME99rLoRjdwEMaiCvwUmVchvukYJldxVTbMIbImjhenBBi6qohjbFBGnvDCkuiJiY"
		const uintRTuuIM = BigInt("146")
		const Finalgf02MQJ = await Final.new(stringfjC71Ny, stringFpgNUk, uintRTuuIM, {from: "0x0000000000000000000000000000000000000001"});
		const uintTQgueax = BigInt("1093")
		const addressXeL2vix = accounts[1]
		const addressOZjlb2U = accounts[0]
		const uintzZVJpaM = BigInt("1013")
		const addressfEZscm = accounts[2]
		const addressy7kzhOY = accounts[2]
		const addressQdgIGvm = accounts[0]
		const addresshuRukj3 = accounts[4]
		const boolKGYrZce = await Finalgf02MQJ.transferFrom.call(addressOZjlb2U, addressXeL2vix, uintTQgueax, {from: accounts[5]});
		const uint8p0OZja5 = await Finalgf02MQJ.decimals.call({from: accounts[3]});
		const stringZMhkFRr = await Finalgf02MQJ.name.call({from: accounts[5]});
		const boolCkkHoc = await Finalgf02MQJ.transferFrom.call(addressy7kzhOY, addressfEZscm, uintzZVJpaM, {from: accounts[1]});
		const uintuMmF84u = await Finalgf02MQJ.allowance.call(addresshuRukj3, addressQdgIGvm, {from: accounts[2]});
	});

	it('test for Final', async () => {
		const stringfIhXXVW = "Wgewpm7Xw612mBklaHwChKhQjmAbLrTcOn8CafHsnVMkPMekJj7"
		const stringIah0EYo = "mMDrD0lwriik7CSv7TDtJrX9eKW6R2y2UM85UJMoGwHd5i22ImTPXSYvJ7QUwEoB6mmsLUEturS9W"
		const uintck0Z8xG = BigInt("5")
		const Finalntj49VH = await Final.new(stringfIhXXVW, stringIah0EYo, uintck0Z8xG, {from: accounts[0]});
		const uintRIZCi6E = BigInt("0")
		const addressUymEuwY = "0x0000000000000000000000000000000000000001"
		const uint8Jb20vZk = await Finalntj49VH.decimals.call({from: accounts[0]});
		const boolz6JBMSR = await Finalntj49VH.transfer.call(addressUymEuwY, uintRIZCi6E, {from: accounts[0]});

		assert.equal(boolz6JBMSR, true)
		assert.equal(uint8Jb20vZk, BigInt("18"))
	});

	it('test for Final', async () => {
		const stringON9MdTp = "Aiz3TujgIhoRzbSWVnHXRhG0CfB5XFhjkmUBVioQZ6j"
		const stringcKabYq = "UEOb8O2MSXbBFuVXjBCOThG2K2yN3P7DhLJhrgiBRCsWztaCXnn1gps8d"
		const uintGu7sWa = BigInt("1835")
		const FinalpvhOO4 = await Final.new(stringON9MdTp, stringcKabYq, uintGu7sWa, {from: accounts[5]});
		const address39Lpu1 = accounts[5]
		const uintIGOVNOt = BigInt("1431")
		const addresseQeXwuu = accounts[4]
		const uint8CuNcyel = await FinalpvhOO4.decimals.call({from: accounts[0]});
		const boolOiaaWWH = await FinalpvhOO4.transferownership.call(address39Lpu1, {from: accounts[5]});
//		const booly7NlHw8 = await FinalpvhOO4.decreaseAllowance.call(addresseQeXwuu, uintIGOVNOt, {from: accounts[4]});

		assert.equal(boolOiaaWWH, true)
		assert.equal(uint8CuNcyel, BigInt("18"))
		await expect(FinalpvhOO4.decreaseAllowance.call(addresseQeXwuu, uintIGOVNOt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})