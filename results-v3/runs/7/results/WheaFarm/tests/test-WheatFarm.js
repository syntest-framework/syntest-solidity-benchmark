const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringlNEkhQ0 = "ihc9WNKHiTrBZmX6dY1Br2RCnNsqkcQwrPbqDiBen2IHrsNrssUAf"
		const stringHAG2V2W = "AdMCaMh791N7Bo2aB6JLMXl9bNM9vp4P"
		const uintoxa7syR = BigInt("1718")
		const WheatFarmGZ2uJgQ = await WheatFarm.new(stringlNEkhQ0, stringHAG2V2W, uintoxa7syR, {from: accounts[4]});
		const addressHudJvXn = accounts[5]
		const uintrMMMosS = BigInt("1970")
		const addressEp4nlsm = accounts[3]
		const uintmAire1s = BigInt("1573")
		const addressXqoLcDd = "0x0000000000000000000000000000000000000001"
		const boolhoeLhGz = await WheatFarmGZ2uJgQ.transferownership.call(addressHudJvXn, {from: accounts[0]});
		const boolqkHqeui = await WheatFarmGZ2uJgQ.increaseAllowance.call(addressEp4nlsm, uintrMMMosS, {from: accounts[5]});
		const boolFDs9xOR = await WheatFarmGZ2uJgQ.approveAndCall.call(addressXqoLcDd, uintmAire1s, {from: accounts[1]});

		await expect(WheatFarmGZ2uJgQ.transferownership.call(addressHudJvXn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringvZNFc9j = "EtFhKjY57INT24w9CJmT78La51rtw5mLpbM"
		const stringwPj3LfR = "MQdr57MXIkdXPDAEXWHED5wVRJwPQUEESx1cFDJb5tylq3BOk03V53O"
		const uintpP6iZOl = BigInt("1036")
		const WheatFarmfqc3NPv = await WheatFarm.new(stringvZNFc9j, stringwPj3LfR, uintpP6iZOl, {from: accounts[0]});
		const uintLy6vt10 = BigInt("1317")
		const addresspRzYBa8 = accounts[2]
		const uintWS0swk8 = BigInt("1261")
		const addressS6hfNc1 = "0x0000000000000000000000000000000000000001"
		const booltpKmvD3 = await WheatFarmfqc3NPv.increaseAllowance.call(addresspRzYBa8, uintLy6vt10, {from: accounts[0]});
		const boolEGwVqnP = await WheatFarmfqc3NPv.transfer.call(addressS6hfNc1, uintWS0swk8, {from: accounts[2]});
		const uint8qUyFXeM = await WheatFarmfqc3NPv.decimals.call({from: accounts[1]});

		await expect(WheatFarmfqc3NPv.increaseAllowance.call(addresspRzYBa8, uintLy6vt10, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringtWxxFuV = "9WtO"
		const stringzvJ3Es = "o5XWMDSP7Pr5jTQSARPotdWAia3Xkv6q5q6U05yR4pAI6C165jPZdAcYG"
		const uintZOqUtJK = BigInt("228")
		const WheatFarmatWtAg = await WheatFarm.new(stringtWxxFuV, stringzvJ3Es, uintZOqUtJK, {from: accounts[0]});
		const uintGa17AHv = BigInt("584")
		const addressEN0l1K = accounts[2]
		const uint5JO9um = BigInt("151")
		const addresssNkXt8T = accounts[1]
		const boole4ucsZs = await WheatFarmatWtAg.approve.call(addressEN0l1K, uintGa17AHv, {from: accounts[4]});
		const boolD531Q91 = await WheatFarmatWtAg.transfer.call(addresssNkXt8T, uint5JO9um, {from: accounts[4]});

		assert.equal(boole4ucsZs, true)
		await expect(WheatFarmatWtAg.transfer.call(addresssNkXt8T, uint5JO9um, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringnZtjYz3 = "1k5IKGG6O7rysaoPqeHcIqXS2JPVk6zQyQ10vIoYS1"
		const stringVvym94Z = "GHnfmg"
		const uintRTxNJLX = BigInt("186")
		const WheatFarmxUKyL7k = await WheatFarm.new(stringnZtjYz3, stringVvym94Z, uintRTxNJLX, {from: "0x0000000000000000000000000000000000000001"});
		const addressrGhUDO = accounts[4]
		const uintpshnRx5 = BigInt("1115")
		const addressnZDK6Yz = accounts[3]
		const uintSVxBv6t = BigInt("207")
		const addressHrIGWSK = accounts[1]
		const uintp2nXPUF = BigInt("432")
		const addressoEFnR7j = "0x0000000000000000000000000000000000000001"
		const addressCM5gJBV = accounts[4]
		const addressHxSjBoM = accounts[1]
		const addressmO1Hvwl = accounts[0]
		const uintoGWuLup = await WheatFarmxUKyL7k.balanceOf.call(addressrGhUDO, {from: accounts[2]});
		const boolX8DfCUs = await WheatFarmxUKyL7k.decreaseAllowance.call(addressnZDK6Yz, uintpshnRx5, {from: accounts[4]});
		const boolgPkNmuF = await WheatFarmxUKyL7k.increaseAllowance.call(addressHrIGWSK, uintSVxBv6t, {from: accounts[4]});
		const boolbPbvFV9 = await WheatFarmxUKyL7k.transfer.call(addressoEFnR7j, uintp2nXPUF, {from: accounts[1]});
		const uintVALzemG = await WheatFarmxUKyL7k.balanceOf.call(addressCM5gJBV, {from: accounts[2]});
		const uintDIXZMmB = await WheatFarmxUKyL7k.allowance.call(addressmO1Hvwl, addressHxSjBoM, {from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const stringBuAGg5y = "dSOj9nwQA6f05F6tG45Bshy93kjJ8QuWiztYtmHnaAgrmZ2a9Zr2Z29bHJ71CBz8Hw0Lx0U3sMZ2eluBsrPzk"
		const stringCrWG2Wo = "BNB2fRI8WAJQx3NP1vEopaLPVK8FcmPrJxDwSLiNHs70TaKSEwKAziaV9NyfWvrvWVatD33xpc7c3yUClo9WLHbEoguTMBP2U2"
		const uintcNDTDoL = BigInt("101")
		const WheatFarmC766jeq = await WheatFarm.new(stringBuAGg5y, stringCrWG2Wo, uintcNDTDoL, {from: accounts[1]});
		const addresssa8ooNY = accounts[6]
		const addressrehdZDK = accounts[4]
		const uintRLcHzaC = BigInt("1580")
		const addresspCZvav6 = accounts[1]
		const uintBFthcka = await WheatFarmC766jeq.allowance.call(addressrehdZDK, addresssa8ooNY, {from: accounts[3]});
		const booluXT8Dk5 = await WheatFarmC766jeq.transfer.call(addresspCZvav6, uintRLcHzaC, {from: accounts[2]});

		assert.equal(uintBFthcka, BigInt("0"))
		await expect(WheatFarmC766jeq.transfer.call(addresspCZvav6, uintRLcHzaC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringtWxxFuV = "9WtO"
		const stringzvJ3Es = "o5XWMDSP7Pr5jTQSARPotdWAia3Xkv6q5q6U05yR4pAI6C165jPZdAcYG"
		const uintWfgrI6w = BigInt("228")
		const WheatFarmatWtAg = await WheatFarm.new(stringtWxxFuV, stringzvJ3Es, uintWfgrI6w, {from: accounts[0]});
		const uintYo5JGqy = BigInt("527")
		const addressB3DfLK = accounts[2]
		const uintydGF4UP = BigInt("925")
		const addresswY92JEC = accounts[4]
		const uintujNBrhU = BigInt("209")
		const addressNXeXiy = accounts[3]
		const uintCFAlkrO = BigInt("151")
		const addressXlJDVSr = accounts[1]
		const boole4ucsZs = await WheatFarmatWtAg.approve.call(addressB3DfLK, uintYo5JGqy, {from: accounts[4]});
		const boolMGJJ1jq = await WheatFarmatWtAg.approveAndCall.call(addresswY92JEC, uintydGF4UP, {from: "0x0000000000000000000000000000000000000001"});
		const boolW33rHo = await WheatFarmatWtAg.approve.call(addressNXeXiy, uintujNBrhU, {from: accounts[0]});
		const boolD531Q91 = await WheatFarmatWtAg.transfer.call(addressXlJDVSr, uintCFAlkrO, {from: accounts[4]});

		assert.equal(boole4ucsZs, true)
		await expect(WheatFarmatWtAg.approveAndCall.call(addresswY92JEC, uintydGF4UP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringuKG2L2j = "RNICdyKTLXokF2ABcjkRNbsP1HM35HauMDUfgT0yb6JoahUYSBONKmPMulCQpSovNxtY9W8wqIu6hEvG6fktYvtlI7RH88"
		const stringol9tmz1 = "d3ya8piEcuYTH2Q4JEes3ix0F5URrpwihgfgzZPusUsqw867olHPsfchMaw0UUzSnEaaWpitS6N5"
		const uintBRjyDDR = BigInt("2023")
		const WheatFarmvmYvvtS = await WheatFarm.new(stringuKG2L2j, stringol9tmz1, uintBRjyDDR, {from: accounts[4]});
		const uintw4uv43x = BigInt("689")
		const addressDrKkOLZ = accounts[0]
		const uintmDGxLK = BigInt("0")
		const addressUwY6uH6 = accounts[1]
		const addresswM9XoI7 = accounts[2]
		const boolyqx1uCH = await WheatFarmvmYvvtS.transfer.call(addressDrKkOLZ, uintw4uv43x, {from: accounts[4]});
		const booljwBDCTA = await WheatFarmvmYvvtS.transferFrom.call(addresswM9XoI7, addressUwY6uH6, uintmDGxLK, {from: accounts[2]});

		assert.equal(booljwBDCTA, true)
		assert.equal(boolyqx1uCH, true)
	});

	it('test for WheatFarm', async () => {
		const stringuKG2L2j = "RNICdyKTLXokF2ABcjkRNbsP1HM35HauMDUfgT0yb6JoahUYSBONKmPMulCQpSovNxtY9W8wqIu6hEvG6fktYvtlI7RH88"
		const stringol9tmz1 = "d3ya8piEcuYTH2Q4JEes3ix0F5URrpwihgfgzZPusUsqw867olHPsfchMaw0UUzSnEaaWpitS6N5"
		const uintQ2IQyhk = BigInt("2023")
		const WheatFarmvmYvvtS = await WheatFarm.new(stringuKG2L2j, stringol9tmz1, uintQ2IQyhk, {from: accounts[4]});
		const uintmteqz1W = BigInt("280")
		const addressA4gMoAE = accounts[4]
		const addressRRmCjhP = "0x0000000000000000000000000000000000000001"
		const uintHpfJFR = BigInt("6")
		const addressGC2UEzk = accounts[1]
		const addressN1OI8DU = accounts[2]
		const boolxaH2t5 = await WheatFarmvmYvvtS.approveAndCall.call(addressA4gMoAE, uintmteqz1W, {from: accounts[4]});
		const stringvdX3nkB = await WheatFarmvmYvvtS.symbol.call({from: accounts[4]});
		const uintUCoppXq = await WheatFarmvmYvvtS.balanceOf.call(addressRRmCjhP, {from: accounts[2]});
		const booljwBDCTA = await WheatFarmvmYvvtS.transferFrom.call(addressN1OI8DU, addressGC2UEzk, uintHpfJFR, {from: accounts[2]});

		assert.equal(boolxaH2t5, true)
		assert.equal(stringvdX3nkB, "d3ya8piEcuYTH2Q4JEes3ix0F5URrpwihgfgzZPusUsqw867olHPsfchMaw0UUzSnEaaWpitS6N5")
		assert.equal(uintUCoppXq, BigInt("0"))
		await expect(WheatFarmvmYvvtS.transferFrom.call(addressN1OI8DU, addressGC2UEzk, uintHpfJFR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringuKG2L2j = "RNICdyKTLXokF2ABcjkRNbsP1HM35HauMDUfgT0yb6JoahUYSBONKmPMulCQpSovNxtY9W8wqIu6hEvG6fktYvtlI7RH88"
		const stringol9tmz1 = "d3ya8piEcuYTH2Q4JEes3ix0F5URrpwihgfgzZPusUsqw867olHPsfchMaw0UUzSnEaaWpitS6N5"
		const uintVhGjXhV = BigInt("2023")
		const WheatFarmvmYvvtS = await WheatFarm.new(stringuKG2L2j, stringol9tmz1, uintVhGjXhV, {from: accounts[4]});
		const uintrOwhTVL = BigInt("593")
		const addressuzlD7U = "0x0000000000000000000000000000000000000001"
		const uintz4BnP1V = BigInt("0")
		const addressz8074bu = accounts[4]
		const boolej3ZBgb = await WheatFarmvmYvvtS.approve.call(addressuzlD7U, uintrOwhTVL, {from: accounts[5]});
		const boolxaH2t5 = await WheatFarmvmYvvtS.approveAndCall.call(addressz8074bu, uintz4BnP1V, {from: accounts[4]});

		assert.equal(boolej3ZBgb, true)
		assert.equal(boolxaH2t5, true)
	});
})