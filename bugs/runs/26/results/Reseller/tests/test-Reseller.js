const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrculgRS1 = accounts[3]
		const FOSTERAddraoOl4ii = accounts[3]
		const initialRaterM2VRuh = BigInt("2008")
		const initialPeriodexQ8xho = BigInt("451")
		const initialOwnerk50ZDur = accounts[4]
		const contractfLQsA4z = await Reseller.new(USDTAddrculgRS1, FOSTERAddraoOl4ii, initialRaterM2VRuh, initialPeriodexQ8xho, initialOwnerk50ZDur, {from: accounts[5]});
		const amountFn5VfjZ = BigInt("561")
		const amountVis8Khz = BigInt("216")
		const accountL8l41qy = accounts[4]
		const nullUiKhQa = await contractfLQsA4z.getEstimation.call(amountFn5VfjZ, {from: accounts[3]});
		const nullRx4wS5w = await contractfLQsA4z.getEstimation.call(amountVis8Khz, {from: accounts[4]});
		const nullf6VJT4i = await contractfLQsA4z.balanceFOSTER.call(accountL8l41qy, {from: accounts[3]});

		assert.equal(nullRx4wS5w, 433728)
		assert.equal(nullUiKhQa, 1126488)
		await expect(contractfLQsA4z.balanceFOSTER.call(accountL8l41qy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrhXHJ5HY = accounts[4]
		const FOSTERAddrQOaQdVo = accounts[2]
		const initialRateah2aSP6 = BigInt("987")
		const initialPeriodwPxfXfL = BigInt("92")
		const initialOwner6LpWWy = accounts[4]
		const contractNkH3svE = await Reseller.new(USDTAddrhXHJ5HY, FOSTERAddrQOaQdVo, initialRateah2aSP6, initialPeriodwPxfXfL, initialOwner6LpWWy, {from: accounts[2]});
		const valueHzwudh1 = BigInt("1855")
		const accountfmdo4l = accounts[2]
		const newMinimumMsFJZnH = BigInt("1449")
		await contractNkH3svE.withdraw.call(valueHzwudh1, {from: accounts[0]});
		const nullXjngdkY = await contractNkH3svE.allowanceFOSTER.call(accountfmdo4l, {from: "0x0000000000000000000000000000000000000001"});
		await contractNkH3svE.setMinimum.call(newMinimumMsFJZnH, {from: accounts[5]});

		await expect(contractNkH3svE.withdraw.call(valueHzwudh1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbqc5nwX = accounts[1]
		const FOSTERAddrNUyKvQW = accounts[4]
		const initialRatephP5oF1 = BigInt("86")
		const initialPeriod0yW1Gb = BigInt("318")
		const initialOwnerEYB50iI = "0x0000000000000000000000000000000000000001"
		const contractkKlqjuT = await Reseller.new(USDTAddrbqc5nwX, FOSTERAddrNUyKvQW, initialRatephP5oF1, initialPeriod0yW1Gb, initialOwnerEYB50iI, {from: "0x0000000000000000000000000000000000000001"});
		const accountyTnKKcf = accounts[3]
		const valueL7l8R4y = BigInt("934")
		const recipientH2yNU5 = accounts[1]
		const ERC20Token8bVdjO = accounts[1]
		const newMinimumBSYPcnv = BigInt("462")
		const newMinimumycWMpkN = BigInt("1952")
		const nullkQ81zMH = await contractkKlqjuT.allowanceUSDT.call(accountyTnKKcf, {from: accounts[3]});
		await contractkKlqjuT.withdrawERC20.call(ERC20Token8bVdjO, recipientH2yNU5, valueL7l8R4y, {from: accounts[3]});
		await contractkKlqjuT.setMinimum.call(newMinimumBSYPcnv, {from: accounts[2]});
		await contractkKlqjuT.setMinimum.call(newMinimumycWMpkN, {from: accounts[3]});
	});

	it('test for Reseller', async () => {
		const USDTAddrPYlwB7k = accounts[4]
		const FOSTERAddrj7iRUc = "0x0000000000000000000000000000000000000001"
		const initialRateGP0fX8S = BigInt("1525")
		const initialPeriodwS1n0eg = BigInt("923")
		const initialOwnerfXQMoWB = accounts[3]
		const contractRGTBp1E = await Reseller.new(USDTAddrPYlwB7k, FOSTERAddrj7iRUc, initialRateGP0fX8S, initialPeriodwS1n0eg, initialOwnerfXQMoWB, {from: accounts[1]});
		const newBoss2PRzIni9 = accounts[1]
		const newBoss2oKQXkye = accounts[3]
		const newBoss4JVyzdv = accounts[0]
		await contractRGTBp1E.deposeBoss2.call(newBoss2PRzIni9, {from: "0x0000000000000000000000000000000000000001"});
		await contractRGTBp1E.deposeBoss2.call(newBoss2oKQXkye, {from: accounts[3]});
		await contractRGTBp1E.deposeBoss4.call(newBoss4JVyzdv, {from: accounts[5]});

		await expect(contractRGTBp1E.deposeBoss2.call(newBoss2PRzIni9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDhTINE7 = accounts[4]
		const FOSTERAddrPNQPTu4 = accounts[2]
		const initialRateEpssfdC = BigInt("896")
		const initialPeriodGuWkp3I = BigInt("411")
		const initialOwnerdQ5WBcK = accounts[4]
		const contractVnvXSbB = await Reseller.new(USDTAddrDhTINE7, FOSTERAddrPNQPTu4, initialRateEpssfdC, initialPeriodGuWkp3I, initialOwnerdQ5WBcK, {from: accounts[3]});
		const level5P8Q3ODK = BigInt("10")
		const level4QizWbp = BigInt("172")
		const level3tMpMvvK = BigInt("227")
		const level2TqKcrV = BigInt("218")
		const level1UAG75VF = BigInt("88")
		const newBoss4lvuuQTf = accounts[2]
		const amountN4Doz5O = BigInt("1608")
		const amountyF5nn6 = BigInt("1333")
		await contractVnvXSbB.setRefBonus.call(level1UAG75VF, level2TqKcrV, level3tMpMvvK, level4QizWbp, level5P8Q3ODK, {from: accounts[0]});
		await contractVnvXSbB.deposeBoss4.call(newBoss4lvuuQTf, {from: accounts[3]});
		const nullxUcCK6l = await contractVnvXSbB.getEstimation.call(amountN4Doz5O, {from: accounts[0]});
		const nulluXQdrc0 = await contractVnvXSbB.getEstimation.call(amountyF5nn6, {from: accounts[1]});

		await expect(contractVnvXSbB.setRefBonus.call(level1UAG75VF, level2TqKcrV, level3tMpMvvK, level4QizWbp, level5P8Q3ODK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrO7os4Rc = accounts[0]
		const FOSTERAddrTiu5D04 = accounts[3]
		const initialRateqCFeMiP = BigInt("1506")
		const initialPeriodouQU8fk = BigInt("1770")
		const initialOwnerKW3dpS = accounts[0]
		const contractkDSn9gT = await Reseller.new(USDTAddrO7os4Rc, FOSTERAddrTiu5D04, initialRateqCFeMiP, initialPeriodouQU8fk, initialOwnerKW3dpS, {from: accounts[2]});
		const commentK3fYW7S = "VHXMS"
		const _ref5Dr2N9N = accounts[3]
		const _ref4xEzQW6J = accounts[4]
		const _ref3ZWT5o8C = accounts[5]
		const _ref2MJdA1qB = accounts[2]
		const _ref1xwJ5pLd = accounts[3]
		const valueWYw305Q = BigInt("1800")
		const valuesBop9jN = BigInt("850")
		const recipientO0JavN = accounts[0]
		const ERC20TokenjaPWShW = accounts[2]
		const level5rbSqDui = BigInt("145")
		const level4oxCXfJs = BigInt("250")
		const level3AI51fk8 = BigInt("193")
		const level2BvBBTXc = BigInt("3")
		const level1hsEdblX = BigInt("196")
		const newBoss4JHSFHQS = accounts[2]
		await contractkDSn9gT.purchase.call(valueWYw305Q, _ref1xwJ5pLd, _ref2MJdA1qB, _ref3ZWT5o8C, _ref4xEzQW6J, _ref5Dr2N9N, commentK3fYW7S, {from: accounts[1]});
		await contractkDSn9gT.withdrawERC20.call(ERC20TokenjaPWShW, recipientO0JavN, valuesBop9jN, {from: accounts[5]});
		await contractkDSn9gT.setRefBonus.call(level1hsEdblX, level2BvBBTXc, level3AI51fk8, level4oxCXfJs, level5rbSqDui, {from: accounts[2]});
		await contractkDSn9gT.deposeBoss4.call(newBoss4JHSFHQS, {from: accounts[2]});

		await expect(contractkDSn9gT.purchase.call(valueWYw305Q, _ref1xwJ5pLd, _ref2MJdA1qB, _ref3ZWT5o8C, _ref4xEzQW6J, _ref5Dr2N9N, commentK3fYW7S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbNFArId = accounts[1]
		const FOSTERAddrHfhETfg = accounts[3]
		const initialRateP4ZkjZ7 = BigInt("546")
		const initialPeriodYz9Czlg = BigInt("1414")
		const initialOwnerNT8xhy = accounts[4]
		const contractzPXadFv = await Reseller.new(USDTAddrbNFArId, FOSTERAddrHfhETfg, initialRateP4ZkjZ7, initialPeriodYz9Czlg, initialOwnerNT8xhy, {from: accounts[1]});
		const newBoss4H4v4n1 = accounts[3]
		const newMinimumxsllyY8 = BigInt("1252")
		const _periodeBLCeHC = BigInt("1093")
		const amountywCt4lu = BigInt("1168")
		const recipientAGSxEqX = "0x0000000000000000000000000000000000000001"
		const newBoss1Y2uExzY = accounts[0]
		await contractzPXadFv.deposeBoss4.call(newBoss4H4v4n1, {from: "0x0000000000000000000000000000000000000001"});
		await contractzPXadFv.setMinimum.call(newMinimumxsllyY8, {from: accounts[3]});
		await contractzPXadFv.freezeAndTransfer.call(recipientAGSxEqX, amountywCt4lu, _periodeBLCeHC, {from: accounts[3]});
		await contractzPXadFv.switchState.call({from: accounts[4]});
		await contractzPXadFv.deposeBoss1.call(newBoss1Y2uExzY, {from: accounts[2]});

		await expect(contractzPXadFv.deposeBoss4.call(newBoss4H4v4n1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXCRkSOc = accounts[1]
		const FOSTERAddrQRy1vqt = accounts[4]
		const initialRateIgdo0Df = BigInt("1689")
		const initialPeriodSQO3Q2A = BigInt("246")
		const initialOwnerZsRALn = accounts[1]
		const contractfjZNin0 = await Reseller.new(USDTAddrXCRkSOc, FOSTERAddrQRy1vqt, initialRateIgdo0Df, initialPeriodSQO3Q2A, initialOwnerZsRALn, {from: accounts[3]});
		const newRateAcXHIVF = BigInt("1740")
		const newFeeBo9WaVj = BigInt("59")
		const level5eXk2Vxm = BigInt("134")
		const level4py7mRX3 = BigInt("253")
		const level3kv4xoJ4 = BigInt("27")
		const level2bFTQw7a = BigInt("135")
		const level1zebCauA = BigInt("90")
		await contractfjZNin0.setRate.call(newRateAcXHIVF, {from: accounts[3]});
		await contractfjZNin0.setFee.call(newFeeBo9WaVj, {from: accounts[3]});
		await contractfjZNin0.setRefBonus.call(level1zebCauA, level2bFTQw7a, level3kv4xoJ4, level4py7mRX3, level5eXk2Vxm, {from: accounts[4]});

		await expect(contractfjZNin0.setRate.call(newRateAcXHIVF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGR6IFTy = accounts[3]
		const FOSTERAddrJkDNqwN = accounts[5]
		const initialRateyeI10wc = BigInt("2027")
		const initialPeriodLtbgnJ = BigInt("260")
		const initialOwnerV5UwPHz = accounts[1]
		const contractEg3qEYd = await Reseller.new(USDTAddrGR6IFTy, FOSTERAddrJkDNqwN, initialRateyeI10wc, initialPeriodLtbgnJ, initialOwnerV5UwPHz, {from: accounts[0]});
		const valueRtiZdl4 = BigInt("1092")
		const recipientT5t4gCI = accounts[5]
		const ERC20TokenSFD84W = accounts[1]
		const newPeriodW7orRBe = BigInt("1493")
		const _ref5oorXgh3 = accounts[4]
		const _ref4aVJDqxo = accounts[2]
		const _ref3s6BFQLG = accounts[4]
		const _ref2RlAtQhO = accounts[4]
		const _ref1jqS2790 = accounts[5]
		const valueON41xsl = BigInt("2009")
		const newMinimumfaUXiMD = BigInt("1757")
		const _ref5NNi8pT1 = "0x0000000000000000000000000000000000000001"
		const _ref4FZplEz7 = "0x0000000000000000000000000000000000000001"
		const _ref3J4CGkiy = accounts[3]
		const _ref2x7Zf5gJ = "0x0000000000000000000000000000000000000001"
		const _ref1n8dBQfW = accounts[4]
		const valueTX4zY32 = BigInt("1025")
		await contractEg3qEYd.withdrawERC20.call(ERC20TokenSFD84W, recipientT5t4gCI, valueRtiZdl4, {from: accounts[4]});
		await contractEg3qEYd.setPeriod.call(newPeriodW7orRBe, {from: "0x0000000000000000000000000000000000000001"});
		await contractEg3qEYd.buy.call(valueON41xsl, _ref1jqS2790, _ref2RlAtQhO, _ref3s6BFQLG, _ref4aVJDqxo, _ref5oorXgh3, {from: accounts[2]});
		await contractEg3qEYd.setMinimum.call(newMinimumfaUXiMD, {from: accounts[3]});
		await contractEg3qEYd.buy.call(valueTX4zY32, _ref1n8dBQfW, _ref2x7Zf5gJ, _ref3J4CGkiy, _ref4FZplEz7, _ref5NNi8pT1, {from: accounts[4]});

		await expect(contractEg3qEYd.withdrawERC20.call(ERC20TokenSFD84W, recipientT5t4gCI, valueRtiZdl4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrC25iOYg = accounts[2]
		const FOSTERAddrQyM2KWH = accounts[0]
		const initialRatev9ox4b2 = BigInt("107")
		const initialPeriodZWdr9vY = BigInt("380")
		const initialOwnerGQx86XH = accounts[1]
		const contractpSrX0i = await Reseller.new(USDTAddrC25iOYg, FOSTERAddrQyM2KWH, initialRatev9ox4b2, initialPeriodZWdr9vY, initialOwnerGQx86XH, {from: accounts[2]});
		const newFeezeiHuKh = BigInt("11")
		const newFeeFucoLap = BigInt("244")
		const commentJs2R9JX = "A1KEMuJE6icBjtDjfN"
		const _ref5Cxm4HhO = accounts[3]
		const _ref4uHdPy4A = accounts[1]
		const _ref3Di6rB3E = accounts[4]
		const _ref2fZDKru0 = accounts[4]
		const _ref1MWcqSWD = accounts[4]
		const valueo6pl3Ch = BigInt("1533")
		const _periodgSOooZ0 = BigInt("1767")
		const amountOsoQKfd = BigInt("580")
		const recipientwdIuRLT = accounts[2]
		await contractpSrX0i.setFee.call(newFeezeiHuKh, {from: accounts[2]});
		await contractpSrX0i.setFee.call(newFeeFucoLap, {from: accounts[0]});
		await contractpSrX0i.purchase.call(valueo6pl3Ch, _ref1MWcqSWD, _ref2fZDKru0, _ref3Di6rB3E, _ref4uHdPy4A, _ref5Cxm4HhO, commentJs2R9JX, {from: accounts[0]});
		await contractpSrX0i.freezeAndTransfer.call(recipientwdIuRLT, amountOsoQKfd, _periodgSOooZ0, {from: accounts[2]});

		await expect(contractpSrX0i.setFee.call(newFeezeiHuKh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzMHhSU = accounts[4]
		const FOSTERAddrO9HV55 = accounts[2]
		const initialRatejNQg08d = BigInt("987")
		const initialPeriodCnKkO3 = BigInt("92")
		const initialOwnerYfbuCTs = accounts[4]
		const contractPv6QJA = await Reseller.new(USDTAddrzMHhSU, FOSTERAddrO9HV55, initialRatejNQg08d, initialPeriodCnKkO3, initialOwnerYfbuCTs, {from: accounts[2]});
		const newMinimumwFTKOU = BigInt("1449")
		const valueV1C5O5O = BigInt("1048")
		const recipientqQHIfM = accounts[3]
		const ERC20Token6GyPxg = accounts[2]
		await contractPv6QJA.setMinimum.call(newMinimumwFTKOU, {from: accounts[5]});
		await contractPv6QJA.withdrawERC20.call(ERC20Token6GyPxg, recipientqQHIfM, valueV1C5O5O, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractPv6QJA.setMinimum.call(newMinimumwFTKOU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrf9U1wiA = accounts[3]
		const FOSTERAddrG6LUZjR = accounts[1]
		const initialRateUULjxQJ = BigInt("800")
		const initialPeriodjlzv64H = BigInt("1730")
		const initialOwnerSdF2EtY = accounts[1]
		const contractzWIurHk = await Reseller.new(USDTAddrf9U1wiA, FOSTERAddrG6LUZjR, initialRateUULjxQJ, initialPeriodjlzv64H, initialOwnerSdF2EtY, {from: accounts[3]});
		const accountICQL0CI = accounts[2]
		const newBoss4CVX0jcV = accounts[2]
		const accountiMClcqs = accounts[1]
		const nullHRbMW1p = await contractzWIurHk.balanceUSDT.call(accountICQL0CI, {from: accounts[4]});
		await contractzWIurHk.deposeBoss4.call(newBoss4CVX0jcV, {from: accounts[0]});
		const nullOBJvC5t = await contractzWIurHk.allowanceUSDT.call(accountiMClcqs, {from: accounts[0]});

		await expect(contractzWIurHk.balanceUSDT.call(accountICQL0CI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtn8uXwz = accounts[2]
		const FOSTERAddrHPONzW7 = "0x0000000000000000000000000000000000000001"
		const initialRateOtt7kJ = BigInt("1705")
		const initialPeriodgEXtk9R = BigInt("966")
		const initialOwnerHJv7IJz = accounts[0]
		const contractXL5OjH = await Reseller.new(USDTAddrtn8uXwz, FOSTERAddrHPONzW7, initialRateOtt7kJ, initialPeriodgEXtk9R, initialOwnerHJv7IJz, {from: accounts[1]});
		const newPeriodXxrR8g = BigInt("1532")
		const commentYHMztuU = "6TBUlTiXiX8RmgbA"
		const _ref5NFjLlNr = "0x0000000000000000000000000000000000000001"
		const _ref4eOAOKAQ = accounts[4]
		const _ref3J5ew1S8 = accounts[0]
		const _ref2dRV96ts = accounts[3]
		const _ref1K7pEjVF = accounts[2]
		const valueuDNquNi = BigInt("765")
		const newMinimumLyx26TX = BigInt("1599")
		const commentP2dTmjg = "QQgPEoaRe6ZPwjm3AvSqBScNzcagHK6axzhRHDXY2esYYaPROkv6dErOmmtI2NBPmt5m2rwATna"
		const _ref5oiBpEDX = "0x0000000000000000000000000000000000000001"
		const _ref4WCQ36SE = accounts[1]
		const _ref3aslmjfd = accounts[4]
		const _ref2wIyl5Dn = accounts[0]
		const _ref1M6kGdxO = accounts[5]
		const valueOj1IcKC = BigInt("1008")
		const accountYNtxXBq = accounts[1]
		await contractXL5OjH.setPeriod.call(newPeriodXxrR8g, {from: accounts[2]});
		await contractXL5OjH.purchase.call(valueuDNquNi, _ref1K7pEjVF, _ref2dRV96ts, _ref3J5ew1S8, _ref4eOAOKAQ, _ref5NFjLlNr, commentYHMztuU, {from: accounts[4]});
		await contractXL5OjH.setMinimum.call(newMinimumLyx26TX, {from: accounts[2]});
		await contractXL5OjH.purchase.call(valueOj1IcKC, _ref1M6kGdxO, _ref2wIyl5Dn, _ref3aslmjfd, _ref4WCQ36SE, _ref5oiBpEDX, commentP2dTmjg, {from: accounts[3]});
		const nullFQpGQI = await contractXL5OjH.allowanceUSDT.call(accountYNtxXBq, {from: accounts[4]});

		await expect(contractXL5OjH.setPeriod.call(newPeriodXxrR8g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEd8DpD0 = accounts[3]
		const FOSTERAddruKtC17O = accounts[5]
		const initialRaterkxEBTw = BigInt("2027")
		const initialPeriodOidFhjh = BigInt("260")
		const initialOwner098hxq = accounts[1]
		const contractMLWZmFz = await Reseller.new(USDTAddrEd8DpD0, FOSTERAddruKtC17O, initialRaterkxEBTw, initialPeriodOidFhjh, initialOwner098hxq, {from: accounts[0]});
		const newBoss3tdYfbg = accounts[0]
		const valueWh0o9Bg = BigInt("1092")
		const recipientNCHznQ = accounts[5]
		const ERC20TokenCyiNhEB = accounts[1]
		const _ref5WaW8Mg = accounts[4]
		const _ref4Fg9L9IH = accounts[2]
		const _ref3B1HPxg = accounts[4]
		const _ref2r9G91NZ = accounts[4]
		const _ref1yc2QoV = accounts[5]
		const valueTxQYNBJ = BigInt("2009")
		const _periodS5yXO0r = BigInt("2028")
		const amountAPZ6n9 = BigInt("1229")
		const recipientiiosh8P = accounts[2]
		const level5R76gDjT = BigInt("32")
		const level4oAreFmq = BigInt("107")
		const level3OxJG00 = BigInt("141")
		const level2t0trA8Z = BigInt("74")
		const level1qNED8eK = BigInt("155")
		const _ref5OHt1n28 = "0x0000000000000000000000000000000000000001"
		const _ref4zNt9Mlr = "0x0000000000000000000000000000000000000001"
		const _ref3uypBwTV = accounts[3]
		const _ref2yEuTVSI = "0x0000000000000000000000000000000000000001"
		const _ref1VrBdtUa = accounts[4]
		const valueQtqCRy = BigInt("1025")
		await contractMLWZmFz.deposeBoss3.call(newBoss3tdYfbg, {from: "0x0000000000000000000000000000000000000001"});
		await contractMLWZmFz.withdrawERC20.call(ERC20TokenCyiNhEB, recipientNCHznQ, valueWh0o9Bg, {from: accounts[4]});
		await contractMLWZmFz.buy.call(valueTxQYNBJ, _ref1yc2QoV, _ref2r9G91NZ, _ref3B1HPxg, _ref4Fg9L9IH, _ref5WaW8Mg, {from: accounts[2]});
		await contractMLWZmFz.freezeAndTransfer.call(recipientiiosh8P, amountAPZ6n9, _periodS5yXO0r, {from: accounts[1]});
		await contractMLWZmFz.setRefBonus.call(level1qNED8eK, level2t0trA8Z, level3OxJG00, level4oAreFmq, level5R76gDjT, {from: accounts[4]});
		await contractMLWZmFz.buy.call(valueQtqCRy, _ref1VrBdtUa, _ref2yEuTVSI, _ref3uypBwTV, _ref4zNt9Mlr, _ref5OHt1n28, {from: accounts[4]});

		await expect(contractMLWZmFz.deposeBoss3.call(newBoss3tdYfbg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYqq9Tn2 = accounts[4]
		const FOSTERAddrIVMzqdE = accounts[2]
		const initialRatebefijNR = BigInt("987")
		const initialPeriodvjjV4GE = BigInt("92")
		const initialOwnerNs1EZUi = accounts[4]
		const contractqjJ3cyF = await Reseller.new(USDTAddrYqq9Tn2, FOSTERAddrIVMzqdE, initialRatebefijNR, initialPeriodvjjV4GE, initialOwnerNs1EZUi, {from: accounts[2]});
		const accountk4w1vv = accounts[5]
		const valueqXW7D9W = BigInt("1868")
		const nullhCQn1UK = await contractqjJ3cyF.allowanceUSDT.call(accountk4w1vv, {from: accounts[0]});
		await contractqjJ3cyF.withdraw.call(valueqXW7D9W, {from: accounts[0]});

		await expect(contractqjJ3cyF.allowanceUSDT.call(accountk4w1vv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrnI7oLtk = accounts[0]
		const FOSTERAddrLgeJKNf = accounts[3]
		const initialRateYpOhwLU = BigInt("1506")
		const initialPeriodd7kFc0 = BigInt("1770")
		const initialOwneryPkaLvl = accounts[0]
		const contractobPWrZn = await Reseller.new(USDTAddrnI7oLtk, FOSTERAddrLgeJKNf, initialRateYpOhwLU, initialPeriodd7kFc0, initialOwneryPkaLvl, {from: accounts[2]});
		const _ref5diCES4w = accounts[1]
		const _ref4ALTdmwy = accounts[2]
		const _ref3QjafoMs = accounts[4]
		const _ref21LHEsW = accounts[1]
		const _ref1Qty0qjL = accounts[1]
		const valuePk286op = BigInt("1624")
		const commentY5tEYbw = "VHXMS"
		const _ref5CxqsD6N = accounts[3]
		const _ref4h3Z4VQ = accounts[4]
		const _ref3wnF9ad5 = accounts[5]
		const _ref2aDZPVH = accounts[2]
		const _ref1OnxT6V4 = accounts[3]
		const valueFdrUDas = BigInt("1800")
		await contractobPWrZn.buy.call(valuePk286op, _ref1Qty0qjL, _ref21LHEsW, _ref3QjafoMs, _ref4ALTdmwy, _ref5diCES4w, {from: accounts[3]});
		await contractobPWrZn.purchase.call(valueFdrUDas, _ref1OnxT6V4, _ref2aDZPVH, _ref3wnF9ad5, _ref4h3Z4VQ, _ref5CxqsD6N, commentY5tEYbw, {from: accounts[1]});

		await expect(contractobPWrZn.buy.call(valuePk286op, _ref1Qty0qjL, _ref21LHEsW, _ref3QjafoMs, _ref4ALTdmwy, _ref5diCES4w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrgF7xfC = accounts[0]
		const FOSTERAddroO5mFI = accounts[3]
		const initialRateDtL0GmF = BigInt("1506")
		const initialPeriodXTzqebQ = BigInt("1770")
		const initialOwnerUrtMF6 = accounts[0]
		const contractdznp8pl = await Reseller.new(USDTAddrrgF7xfC, FOSTERAddroO5mFI, initialRateDtL0GmF, initialPeriodXTzqebQ, initialOwnerUrtMF6, {from: accounts[2]});
		const _periodZYCcJDN = BigInt("1005")
		const amountVF1ie1O = BigInt("1870")
		const recipientVi8Q5LT = accounts[1]
		const commentxdbtNhy = "VHXMS"
		const _ref5AYnj7be = accounts[3]
		const _ref4UPN6FGJ = accounts[4]
		const _ref3uvwP8yi = accounts[6]
		const _ref2s2WUM2U = accounts[2]
		const _ref1cNNZ56 = accounts[3]
		const valueUufzvC = BigInt("1800")
		await contractdznp8pl.freezeAndTransfer.call(recipientVi8Q5LT, amountVF1ie1O, _periodZYCcJDN, {from: accounts[3]});
		await contractdznp8pl.purchase.call(valueUufzvC, _ref1cNNZ56, _ref2s2WUM2U, _ref3uvwP8yi, _ref4UPN6FGJ, _ref5AYnj7be, commentxdbtNhy, {from: accounts[1]});

		await expect(contractdznp8pl.freezeAndTransfer.call(recipientVi8Q5LT, amountVF1ie1O, _periodZYCcJDN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrAMLpCi = accounts[0]
		const FOSTERAddr3t4suM = accounts[3]
		const initialRatef492Tb7 = BigInt("1506")
		const initialPeriod8nwd8m = BigInt("1770")
		const initialOwnerTNJCBD8 = accounts[0]
		const contractfmS818u = await Reseller.new(USDTAddrAMLpCi, FOSTERAddr3t4suM, initialRatef492Tb7, initialPeriod8nwd8m, initialOwnerTNJCBD8, {from: accounts[2]});
		const commentqNZKLAa = "VHXMS"
		const _ref5bfZuH9 = accounts[3]
		const _ref4IU5tg8y = accounts[4]
		const _ref3jQcA5XR = accounts[6]
		const _ref2umV3PdL = accounts[2]
		const _ref1tIztfqk = accounts[3]
		const valueNlWQhwA = BigInt("1800")
		const newFeeT9RKo5F = BigInt("141")
		const value0unADR = BigInt("850")
		const recipientDGR3kEK = accounts[1]
		const ERC20TokenmuYMkZt = accounts[2]
		await contractfmS818u.switchState.call({from: accounts[5]});
		await contractfmS818u.purchase.call(valueNlWQhwA, _ref1tIztfqk, _ref2umV3PdL, _ref3jQcA5XR, _ref4IU5tg8y, _ref5bfZuH9, commentqNZKLAa, {from: accounts[1]});
		await contractfmS818u.setFee.call(newFeeT9RKo5F, {from: accounts[5]});
		await contractfmS818u.withdrawERC20.call(ERC20TokenmuYMkZt, recipientDGR3kEK, value0unADR, {from: accounts[5]});

		await expect(contractfmS818u.switchState.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKXSx6XG = accounts[2]
		const FOSTERAddrXhRcHQU = accounts[1]
		const initialRatesFafQTl = BigInt("443")
		const initialPeriodHABp6ii = BigInt("438")
		const initialOwnerqGgR359 = accounts[3]
		const contractPiKBzmW = await Reseller.new(USDTAddrKXSx6XG, FOSTERAddrXhRcHQU, initialRatesFafQTl, initialPeriodHABp6ii, initialOwnerqGgR359, {from: accounts[0]});
		const amountbTIFxuH = BigInt("770")
		const accountMGPHLHD = accounts[3]
		const newMinimumTICQ992 = BigInt("86")
		const newBoss1aTnI1gC = accounts[1]
		const nullJ9HKQT = await contractPiKBzmW.getEstimation.call(amountbTIFxuH, {from: accounts[2]});
		const nullTuowJ61 = await contractPiKBzmW.allowanceFOSTER.call(accountMGPHLHD, {from: accounts[2]});
		await contractPiKBzmW.setMinimum.call(newMinimumTICQ992, {from: accounts[2]});
		await contractPiKBzmW.deposeBoss1.call(newBoss1aTnI1gC, {from: accounts[1]});

		assert.equal(nullJ9HKQT, 341110)
		await expect(contractPiKBzmW.allowanceFOSTER.call(accountMGPHLHD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr1Ebiaa = accounts[0]
		const FOSTERAddrqY0R1wt = accounts[5]
		const initialRateposIefm = BigInt("672")
		const initialPeriodxhdK6QX = BigInt("444")
		const initialOwnervOZQIfb = accounts[3]
		const contractN4NAY6 = await Reseller.new(USDTAddr1Ebiaa, FOSTERAddrqY0R1wt, initialRateposIefm, initialPeriodxhdK6QX, initialOwnervOZQIfb, {from: accounts[3]});
		const newBoss1EllIQ3Z = accounts[2]
		const account3oxjEp = accounts[4]
		await contractN4NAY6.deposeBoss1.call(newBoss1EllIQ3Z, {from: accounts[4]});
		const nulld54JSFI = await contractN4NAY6.balanceUSDT.call(account3oxjEp, {from: accounts[1]});

		await expect(contractN4NAY6.deposeBoss1.call(newBoss1EllIQ3Z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})