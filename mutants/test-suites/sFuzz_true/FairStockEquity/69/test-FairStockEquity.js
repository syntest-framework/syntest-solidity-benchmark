const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressfqBTeoG = accounts[3]
		const addressgQcOkfN = accounts[0]
		const addressftmuMEJ = accounts[2]
		const addressGRBadwi = accounts[4]
		const uintI9EzqwE = BigInt("481")
		const FairStockEquityGY5wR9A = await FairStockEquity.new(addressfqBTeoG, addressgQcOkfN, addressftmuMEJ, addressGRBadwi, uintI9EzqwE, {from: accounts[3]});
		const uintfZkd2a = BigInt("1936")
		const uintrnWqhO9 = BigInt("1414")
		const uintgWdVsrC = BigInt("219")
		const uintrhBS4CZ = BigInt("597")
		const uintBWehiR = BigInt("171")
		const uint8aRti2 = BigInt("1118")
		const addressSClftHd = accounts[0]
//		const uint256gRRUEZC = await FairStockEquityGY5wR9A.setDegree.call(uintBWehiR, uintrhBS4CZ, uintgWdVsrC, uintrnWqhO9, uintfZkd2a, {from: accounts[4]});
//		const addressNRahYgy = await FairStockEquityGY5wR9A.depositLPT.call(addressSClftHd, uint8aRti2, {from: accounts[2]});
//		await FairStockEquityGY5wR9A.withdrawPJ.call({from: accounts[0]});

		await expect(FairStockEquityGY5wR9A.setDegree.call(uintBWehiR, uintrhBS4CZ, uintgWdVsrC, uintrnWqhO9, uintfZkd2a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTIvf1at = accounts[0]
		const addressTNtyN9Y = "0x0000000000000000000000000000000000000001"
		const addressfkWBdlu = accounts[3]
		const addressTLnsJV = accounts[5]
		const uintKIUsIAq = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressTIvf1at, addressTNtyN9Y, addressfkWBdlu, addressTLnsJV, uintKIUsIAq, {from: accounts[3]});
		const uintIslmKEq = BigInt("946")
		const uinthd2zibu = BigInt("1222")
		const addresswhREExI = accounts[2]
		const uintifUIYsj = BigInt("940")
		const uintON4S7fA = BigInt("1217")
		const address3g8QXA = accounts[2]
		const uint256JAayixV = await FairStockEquityAMQ9Wr.getCostAmount.call(uintIslmKEq, {from: accounts[1]});
//		const addressPtdMcjO = await FairStockEquityAMQ9Wr.depositLPT.call(addresswhREExI, uinthd2zibu, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYmtwIyO = await FairStockEquityAMQ9Wr.withdrawBonusCallback.call(address3g8QXA, uintON4S7fA, uintifUIYsj, {from: accounts[2]});
//		await FairStockEquityAMQ9Wr.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquityAMQ9Wr.depositLPT.call(addresswhREExI, uinthd2zibu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPjyh9ZI = accounts[1]
		const addressftGbvjX = accounts[4]
		const addressE8yWcqq = "0x0000000000000000000000000000000000000001"
		const addresssQGRQuV = accounts[0]
		const uintzLV0TC2 = BigInt("1779")
		const FairStockEquityZCIJdky = await FairStockEquity.new(addressPjyh9ZI, addressftGbvjX, addressE8yWcqq, addresssQGRQuV, uintzLV0TC2, {from: "0x0000000000000000000000000000000000000001"});
		const uintJWBegAk = BigInt("887")
		const uintVWiGx1p = BigInt("1344")
		const addressJKwhwiR = accounts[3]
		const uinttCdFE3B = BigInt("1825")
		const uinteAP0USt = BigInt("28")
		const addressoDdEQEc = accounts[2]
		const addressZqmxXTH = await FairStockEquityZCIJdky.setModule.call(addressJKwhwiR, uintVWiGx1p, uintJWBegAk, {from: accounts[2]});
		const addressmFXJIvC = await FairStockEquityZCIJdky.withdrawMTCallback.call(addressoDdEQEc, uinteAP0USt, uinttCdFE3B, {from: accounts[3]});
		await FairStockEquityZCIJdky.onlyDataSource.call({from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const addressTgrB1w0 = accounts[5]
		const addressQPcyk3N = accounts[1]
		const addressuEXM1jz = accounts[5]
		const addressCyuf6t = accounts[0]
		const uintAYpEgUO = BigInt("296")
		const FairStockEquityfrtVM0v = await FairStockEquity.new(addressTgrB1w0, addressQPcyk3N, addressuEXM1jz, addressCyuf6t, uintAYpEgUO, {from: accounts[5]});
		const uintR9PbB5d = BigInt("1210")
		const boolxkolUR7 = true
		const addressBPcPxT = accounts[2]
//		const uint256oIZhss4 = await FairStockEquityfrtVM0v.reduceShare.call(uintR9PbB5d, {from: accounts[2]});
//		const addresssM02aZu = await FairStockEquityfrtVM0v.setLPT.call(addressBPcPxT, boolxkolUR7, {from: accounts[2]});

		await expect(FairStockEquityfrtVM0v.reduceShare.call(uintR9PbB5d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressV7I2iQz = accounts[3]
		const addressGftZnaf = accounts[2]
		const addressOzKGJR = accounts[0]
		const addressnB5NVtd = accounts[5]
		const uintCLzw4hk = BigInt("1980")
		const FairStockEquityzn44Ye4 = await FairStockEquity.new(addressV7I2iQz, addressGftZnaf, addressOzKGJR, addressnB5NVtd, uintCLzw4hk, {from: accounts[3]});
		const uintiV8RIbQ = BigInt("891")
		const addressZaEmCmH = accounts[1]
		const uintBHtoNIY = BigInt("411")
		const uintCoqdlNS = BigInt("1382")
		const boolGLyiM04 = false
		const addressWNJwxVv = accounts[2]
		const uints4PrpfC = BigInt("162")
		const uintvWH8apo = BigInt("411")
		const addressqGwVgiL = accounts[1]
//		const addressH2JVO3q = await FairStockEquityzn44Ye4.withdrawLPT.call(addressZaEmCmH, uintiV8RIbQ, {from: accounts[5]});
//		const uint256e8IqFke = await FairStockEquityzn44Ye4.setStartTime.call(uintBHtoNIY, {from: accounts[3]});
//		const uint256v5ecTjc = await FairStockEquityzn44Ye4.setStartTime.call(uintCoqdlNS, {from: accounts[4]});
//		const addressbRxjA4A = await FairStockEquityzn44Ye4.setLPT.call(addressWNJwxVv, boolGLyiM04, {from: accounts[2]});
//		const addresspdES55G = await FairStockEquityzn44Ye4.withdrawBonusCallback.call(addressqGwVgiL, uintvWH8apo, uints4PrpfC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityzn44Ye4.withdrawLPT.call(addressZaEmCmH, uintiV8RIbQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUPYgQFd = accounts[0]
		const addressQPcrI0X = "0x0000000000000000000000000000000000000001"
		const addressrJQP5iL = accounts[3]
		const addressuAuA1sG = accounts[5]
		const uintmLOMm1k = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressUPYgQFd, addressQPcrI0X, addressrJQP5iL, addressuAuA1sG, uintmLOMm1k, {from: accounts[3]});
		const uintb6SDIJc = BigInt("1")
		const uintBRJTVxg = BigInt("1901")
		const addressvYtdoWz = accounts[2]
		const uintry8jKXT = BigInt("946")
		const uintxa2ragu = BigInt("1222")
		const addressCgXwVmi = accounts[2]
		const uintN1nFz08 = BigInt("265")
		const uintsufj6Q = BigInt("163")
		const addressXHkI6K = accounts[3]
		const uintyefkZaZ = BigInt("940")
		const uintFERcEph = BigInt("1206")
		const addressjXVhjN = accounts[0]
//		const addressRt9PXak = await FairStockEquityAMQ9Wr.withdrawMTCallback.call(addressvYtdoWz, uintBRJTVxg, uintb6SDIJc, {from: accounts[2]});
//		const uint256JAayixV = await FairStockEquityAMQ9Wr.getCostAmount.call(uintry8jKXT, {from: accounts[1]});
//		const addressPtdMcjO = await FairStockEquityAMQ9Wr.depositLPT.call(addressCgXwVmi, uintxa2ragu, {from: "0x0000000000000000000000000000000000000001"});
//		const addressdt3gFpa = await FairStockEquityAMQ9Wr.setModule.call(addressXHkI6K, uintsufj6Q, uintN1nFz08, {from: accounts[4]});
//		const addressYmtwIyO = await FairStockEquityAMQ9Wr.withdrawBonusCallback.call(addressjXVhjN, uintFERcEph, uintyefkZaZ, {from: accounts[2]});
//		await FairStockEquityAMQ9Wr.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquityAMQ9Wr.withdrawMTCallback.call(addressvYtdoWz, uintBRJTVxg, uintb6SDIJc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqk5637 = accounts[0]
		const addressI1drWTs = "0x0000000000000000000000000000000000000001"
		const addressLTXa8dw = accounts[3]
		const addresssYmiMpj = accounts[5]
		const uintmGub4bE = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressqk5637, addressI1drWTs, addressLTXa8dw, addresssYmiMpj, uintmGub4bE, {from: accounts[3]});
		const uintS7dJObF = BigInt("946")
		const uintAHtLhWZ = BigInt("1222")
		const addresshYQiqCA = accounts[2]
		const uintCoDY3jz = BigInt("940")
		const uintwHYc8ro = BigInt("1217")
		const addressaAvjrob = "0x0000000000000000000000000000000000000000"
		const uintUEjAAi8 = BigInt("221")
		const uintskHhzIW = BigInt("1217")
		const addressnZZyan0 = accounts[0]
		const uint256JAayixV = await FairStockEquityAMQ9Wr.getCostAmount.call(uintS7dJObF, {from: accounts[1]});
//		await FairStockEquityAMQ9Wr.f.call({from: accounts[0]});
//		const addressPtdMcjO = await FairStockEquityAMQ9Wr.depositLPT.call(addresshYQiqCA, uintAHtLhWZ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYmtwIyO = await FairStockEquityAMQ9Wr.withdrawBonusCallback.call(addressaAvjrob, uintwHYc8ro, uintCoDY3jz, {from: accounts[2]});
//		const addressY5csvhv = await FairStockEquityAMQ9Wr.withdrawBonusCallback.call(addressnZZyan0, uintskHhzIW, uintUEjAAi8, {from: accounts[0]});
//		await FairStockEquityAMQ9Wr.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquityAMQ9Wr.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEQC87XU = accounts[0]
		const addresss6NfK57 = "0x0000000000000000000000000000000000000001"
		const addressKl09Y96 = accounts[3]
		const addressoxQxGs = accounts[5]
		const uinty5pDNs1 = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressEQC87XU, addresss6NfK57, addressKl09Y96, addressoxQxGs, uinty5pDNs1, {from: accounts[3]});
		const uintSvw8Q05 = BigInt("946")
		const uintDiIkcOx = BigInt("1222")
		const addressX8Hzl3Z = accounts[2]
		const uintSSay2I = BigInt("940")
		const uintCqTOHtn = BigInt("1217")
		const addressn3g88rv = accounts[2]
		const uint256JAayixV = await FairStockEquityAMQ9Wr.getCostAmount.call(uintSvw8Q05, {from: accounts[1]});
//		await FairStockEquityAMQ9Wr.withdrawBonus.call({from: accounts[1]});
//		const addressPtdMcjO = await FairStockEquityAMQ9Wr.depositLPT.call(addressX8Hzl3Z, uintDiIkcOx, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYmtwIyO = await FairStockEquityAMQ9Wr.withdrawBonusCallback.call(addressn3g88rv, uintCqTOHtn, uintSSay2I, {from: accounts[2]});

		await expect(FairStockEquityAMQ9Wr.withdrawBonus.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDyOZixn = accounts[0]
		const addressALYFxF2 = "0x0000000000000000000000000000000000000001"
		const addressvffn9Qf = accounts[3]
		const addresszaAWYvk = accounts[5]
		const uintBfIvEdr = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressDyOZixn, addressALYFxF2, addressvffn9Qf, addresszaAWYvk, uintBfIvEdr, {from: accounts[3]});
		const uintCPomvLY = BigInt("946")
		const uintsDK0AiD = BigInt("187")
		const uint256JAayixV = await FairStockEquityAMQ9Wr.getCostAmount.call(uintCPomvLY, {from: accounts[1]});
//		const uint256CW4SndD = await FairStockEquityAMQ9Wr.invest.call(uintsDK0AiD, {from: accounts[3]});
//		await FairStockEquityAMQ9Wr.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquityAMQ9Wr.invest.call(uintsDK0AiD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressg9yzTHQ = accounts[4]
		const addressxkFHpqd = accounts[5]
		const addressUCpqorU = accounts[3]
		const addresskqwoTkt = accounts[3]
		const uintm5zR0xD = BigInt("624")
		const FairStockEquityf3AoMIV = await FairStockEquity.new(addressg9yzTHQ, addressxkFHpqd, addressUCpqorU, addresskqwoTkt, uintm5zR0xD, {from: accounts[3]});
		const uintozV0OfN = BigInt("1935")
		const uintYn7xdXE = BigInt("685")
		const uintUNMIX2h = BigInt("533")
		const addressc1Nphsx = "0x0000000000000000000000000000000000000001"
		const uintV2Z4AG9 = BigInt("144")
		const uintQoVVCkO = BigInt("1380")
		const uintCj5c6KG = BigInt("1499")
		const uintejMfQu1 = BigInt("1139")
		const addressSKCW6Gz = accounts[2]
//		const uint256FRMAxt6 = await FairStockEquityf3AoMIV.setProfitPercentPJ.call(uintozV0OfN, {from: accounts[4]});
//		const uint256rBtXwSB = await FairStockEquityf3AoMIV.setStartTime.call(uintYn7xdXE, {from: accounts[0]});
//		const addressrtT5u3g = await FairStockEquityf3AoMIV.withdrawLPT.call(addressc1Nphsx, uintUNMIX2h, {from: accounts[4]});
//		await FairStockEquityf3AoMIV.f.call({from: accounts[3]});
//		const addressDEgp1r = await FairStockEquityf3AoMIV.business.call(addressSKCW6Gz, uintejMfQu1, uintCj5c6KG, uintQoVVCkO, uintV2Z4AG9, {from: accounts[2]});
//		await FairStockEquityf3AoMIV.onlyDataSource.call({from: accounts[0]});

		await expect(FairStockEquityf3AoMIV.setProfitPercentPJ.call(uintozV0OfN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYKzaFIM = accounts[0]
		const addressZgeHrBy = "0x0000000000000000000000000000000000000001"
		const addressjzgKmib = accounts[3]
		const addressk2WsiSC = accounts[5]
		const uintAOSALUX = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressYKzaFIM, addressZgeHrBy, addressjzgKmib, addressk2WsiSC, uintAOSALUX, {from: accounts[3]});
//		await FairStockEquityAMQ9Wr.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquityAMQ9Wr.withdrawMT.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNmbPE91 = accounts[0]
		const addressU5Twbj7 = "0x0000000000000000000000000000000000000001"
		const addressvm9GEIy = accounts[3]
		const addressezusv2S = accounts[5]
		const uintG3oP3p = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressNmbPE91, addressU5Twbj7, addressvm9GEIy, addressezusv2S, uintG3oP3p, {from: accounts[3]});
		const uintQiwq9e1 = BigInt("946")
//		await FairStockEquityAMQ9Wr.withdrawPJ.call({from: accounts[3]});
//		const uint256JAayixV = await FairStockEquityAMQ9Wr.getCostAmount.call(uintQiwq9e1, {from: accounts[1]});

		await expect(FairStockEquityAMQ9Wr.withdrawPJ.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxvAMzfV = accounts[0]
		const addresshp3Bc4H = "0x0000000000000000000000000000000000000001"
		const addressG0WPnTT = accounts[3]
		const addressjYGXzfa = accounts[5]
		const uintkzE7JsM = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressxvAMzfV, addresshp3Bc4H, addressG0WPnTT, addressjYGXzfa, uintkzE7JsM, {from: accounts[3]});
		const uintVSiSnD6 = BigInt("977")
		const uinty86guGx = BigInt("625")
		const boolCvN66V3 = true
		const addressqwBRu8v = accounts[0]
		const uint256JAayixV = await FairStockEquityAMQ9Wr.getCostAmount.call(uintVSiSnD6, {from: accounts[1]});
//		const uint256M3cuEF4 = await FairStockEquityAMQ9Wr.setStartTime.call(uinty86guGx, {from: accounts[3]});
//		await FairStockEquityAMQ9Wr.withdrawMT.call({from: accounts[3]});
//		const addressjJS9utz = await FairStockEquityAMQ9Wr.setLPT.call(addressqwBRu8v, boolCvN66V3, {from: accounts[4]});

		await expect(FairStockEquityAMQ9Wr.setStartTime.call(uinty86guGx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressx6OEK1g = accounts[0]
		const addressmeb6Pu0 = "0x0000000000000000000000000000000000000001"
		const addressyTYgB53 = accounts[3]
		const addressIOwbi6z = accounts[5]
		const uint5kL4Ta = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressx6OEK1g, addressmeb6Pu0, addressyTYgB53, addressIOwbi6z, uint5kL4Ta, {from: accounts[3]});
		const uintwOjx1v = BigInt("434")
		const uintporySdO = BigInt("593")
		const uintYLX3hQv = BigInt("556")
		const uintmdL5pFd = BigInt("324")
		const addressaot2V7B = accounts[0]
		const uinteIr2j4v = BigInt("1222")
		const addressnG3QqoL = accounts[2]
//		await FairStockEquityAMQ9Wr.onlyDataSource.call({from: accounts[3]});
//		const uint256ZIWSPnl = await FairStockEquityAMQ9Wr.depositBonus.call(uintwOjx1v, {from: accounts[5]});
//		const uint256nFH9UkA = await FairStockEquityAMQ9Wr.depositBonus.call(uintporySdO, {from: accounts[1]});
//		const addressKap6pI = await FairStockEquityAMQ9Wr.withdrawMTCallback.call(addressaot2V7B, uintmdL5pFd, uintYLX3hQv, {from: accounts[1]});
//		const addressPtdMcjO = await FairStockEquityAMQ9Wr.depositLPT.call(addressnG3QqoL, uinteIr2j4v, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityAMQ9Wr.onlyDataSource.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressln9pZJ = accounts[0]
		const addressj6RyuUS = "0x0000000000000000000000000000000000000001"
		const addressHzxMap = accounts[3]
		const addressJHgValE = accounts[5]
		const uintVsztNzF = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressln9pZJ, addressj6RyuUS, addressHzxMap, addressJHgValE, uintVsztNzF, {from: accounts[3]});
		const uintmm7Pn5W = BigInt("1476")
		const uintn70Ahxy = BigInt("1997")
		const uintsmfaWDG = BigInt("881")
		const uintTNz3M3b = BigInt("1387")
		const addresslyPLTyN = accounts[2]
		const uintkAYMS2c = BigInt("1637")
		const uintT1HKHv4 = BigInt("1222")
		const addressWILSWZ3 = accounts[2]
//		const addressmv5YRUe = await FairStockEquityAMQ9Wr.business.call(addresslyPLTyN, uintTNz3M3b, uintsmfaWDG, uintn70Ahxy, uintmm7Pn5W, {from: accounts[4]});
//		const uint2564jIW8l = await FairStockEquityAMQ9Wr.setProfitPercentMT.call(uintkAYMS2c, {from: accounts[4]});
//		const addressPtdMcjO = await FairStockEquityAMQ9Wr.depositLPT.call(addressWILSWZ3, uintT1HKHv4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityAMQ9Wr.business.call(addresslyPLTyN, uintTNz3M3b, uintsmfaWDG, uintn70Ahxy, uintmm7Pn5W, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressq6DXwDT = accounts[0]
		const addresson6hlh2 = "0x0000000000000000000000000000000000000001"
		const addressHekWctT = accounts[3]
		const addressZSlEUKp = accounts[5]
		const uinti1vSHnH = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressq6DXwDT, addresson6hlh2, addressHekWctT, addressZSlEUKp, uinti1vSHnH, {from: accounts[3]});
		const uintZMKTtax = BigInt("417")
		const uintnhf3iu5 = BigInt("332")
		const addresspHqcSHI = "0x0000000000000000000000000000000000000001"
		const uintYHpVYVT = BigInt("1030")
		const uintZca7LIn = BigInt("1236")
		const addressQ02BuK3 = accounts[2]
		const addressvPtWjZJ = await FairStockEquityAMQ9Wr.setModule.call(addresspHqcSHI, uintnhf3iu5, uintZMKTtax, {from: accounts[3]});
//		const uint256JKaznzu = await FairStockEquityAMQ9Wr.invest.call(uintYHpVYVT, {from: accounts[3]});
//		const addressPtdMcjO = await FairStockEquityAMQ9Wr.depositLPT.call(addressQ02BuK3, uintZca7LIn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityAMQ9Wr.invest.call(uintYHpVYVT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspPh5FcW = accounts[0]
		const addressWYCUotN = "0x0000000000000000000000000000000000000001"
		const addressoBANMsQ = accounts[3]
		const addresslmrunJ4 = accounts[5]
		const uinttbRYd2J = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addresspPh5FcW, addressWYCUotN, addressoBANMsQ, addresslmrunJ4, uinttbRYd2J, {from: accounts[3]});
		const uintvYbgP9M = BigInt("564")
		const uintYD265L5 = BigInt("1223")
		const addresszkyhV3U = accounts[2]
//		const uint256pXlOYNb = await FairStockEquityAMQ9Wr.depositBonus.call(uintvYbgP9M, {from: "0x0000000000000000000000000000000000000001"});
//		const addressPtdMcjO = await FairStockEquityAMQ9Wr.depositLPT.call(addresszkyhV3U, uintYD265L5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityAMQ9Wr.depositBonus.call(uintvYbgP9M, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmHoIBHy = accounts[0]
		const addressgZ1DV7 = "0x0000000000000000000000000000000000000001"
		const addresspIeMqfJ = accounts[3]
		const addressWsbJVv = accounts[5]
		const uintYOwG98L = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressmHoIBHy, addressgZ1DV7, addresspIeMqfJ, addressWsbJVv, uintYOwG98L, {from: accounts[3]});
		const uintSO6kCeC = BigInt("1426")
		const uintT6X1tlZ = BigInt("1672")
		const address7pTCmO = accounts[4]
		const boolxF301Sb = false
		const addresstTZu36K = accounts[0]
		const uintL8U2fdN = BigInt("1212")
		const addressRNOl9CQ = accounts[2]
		const uintUPmSrGX = BigInt("680")
//		const addressLzdLyW4 = await FairStockEquityAMQ9Wr.withdrawBonusCallback.call(address7pTCmO, uintT6X1tlZ, uintSO6kCeC, {from: accounts[5]});
//		const addressF3ux3Lk = await FairStockEquityAMQ9Wr.setLPT.call(addresstTZu36K, boolxF301Sb, {from: "0x0000000000000000000000000000000000000001"});
//		const addressPtdMcjO = await FairStockEquityAMQ9Wr.depositLPT.call(addressRNOl9CQ, uintL8U2fdN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256KbkM5Yg = await FairStockEquityAMQ9Wr.reduceShare.call(uintUPmSrGX, {from: accounts[2]});

		await expect(FairStockEquityAMQ9Wr.withdrawBonusCallback.call(address7pTCmO, uintT6X1tlZ, uintSO6kCeC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressadfYxdG = "0x0000000000000000000000000000000000000001"
		const addressrzClVHQ = accounts[2]
		const addressGXTWrtS = accounts[1]
		const addressQ09fNo0 = accounts[1]
		const uintduQbUPs = BigInt("365")
		const FairStockEquityL8ZGUP = await FairStockEquity.new(addressadfYxdG, addressrzClVHQ, addressGXTWrtS, addressQ09fNo0, uintduQbUPs, {from: accounts[4]});
		const uintIRfBNsZ = BigInt("75")
		const uintqlakTBR = BigInt("1191")
		const addressAlBLVpI = accounts[1]
		const uintTMFF9c3 = BigInt("1753")
		const uintKLXdZkA = BigInt("460")
//		const addressKlsdhEq = await FairStockEquityL8ZGUP.withdrawMTCallback.call(addressAlBLVpI, uintqlakTBR, uintIRfBNsZ, {from: accounts[1]});
//		const uint256YCNY3EW = await FairStockEquityL8ZGUP.setProfitPercentMT.call(uintTMFF9c3, {from: accounts[2]});
//		const uint256HJdKbn0 = await FairStockEquityL8ZGUP.setGasFeeForCallback.call(uintKLXdZkA, {from: accounts[5]});

		await expect(FairStockEquityL8ZGUP.withdrawMTCallback.call(addressAlBLVpI, uintqlakTBR, uintIRfBNsZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQThTavK = accounts[0]
		const addresskfqQoFN = "0x0000000000000000000000000000000000000001"
		const addressSv6caUg = accounts[3]
		const addressKO1YKSO = accounts[5]
		const uintCywXv8G = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addressQThTavK, addresskfqQoFN, addressSv6caUg, addressKO1YKSO, uintCywXv8G, {from: accounts[3]});
		const uintBuEVmzL = BigInt("461")
		const booll4fOrUj = true
		const addressMLLni3t = accounts[0]
		const uint256JAayixV = await FairStockEquityAMQ9Wr.getCostAmount.call(uintBuEVmzL, {from: accounts[1]});
		const addresseleiQ4m = await FairStockEquityAMQ9Wr.setLPT.call(addressMLLni3t, booll4fOrUj, {from: accounts[3]});
	});

	it('test for FairStockEquity', async () => {
		const addresso0IGnrw = accounts[0]
		const addressIB7h18 = "0x0000000000000000000000000000000000000001"
		const addressm9cLUTy = accounts[3]
		const addressqL4J4oB = accounts[5]
		const uintKJ2W607 = BigInt("1142")
		const FairStockEquityAMQ9Wr = await FairStockEquity.new(addresso0IGnrw, addressIB7h18, addressm9cLUTy, addressqL4J4oB, uintKJ2W607, {from: accounts[3]});
		const uintSL3byN = BigInt("1407")
		const uintnlVgsm9 = BigInt("1222")
		const addressTgEKzCX = "0x0000000000000000000000000000000000000001"
//		const uint256lmKbjg3 = await FairStockEquityAMQ9Wr.bonus.call(uintSL3byN, {from: accounts[5]});
//		const addressPtdMcjO = await FairStockEquityAMQ9Wr.depositLPT.call(addressTgEKzCX, uintnlVgsm9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityAMQ9Wr.bonus.call(uintSL3byN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})