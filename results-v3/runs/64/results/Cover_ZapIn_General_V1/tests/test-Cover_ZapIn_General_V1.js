const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintpPm0bFA = BigInt("468")
		const Cover_ZapIn_General_V1ycDILLE = await Cover_ZapIn_General_V1.new(uintpPm0bFA, {from: accounts[2]});
		const addressMGWP6Gv = accounts[0]
		const addressnBayRtW = accounts[3]
		await Cover_ZapIn_General_V1ycDILLE.toggleContractActive.call({from: accounts[5]});
		const 
U7nZR5X = await Cover_ZapIn_General_V1ycDILLE._getCoverDetails.call(addressMGWP6Gv, {from: accounts[3]});
		const addressrZRlJAd = await Cover_ZapIn_General_V1ycDILLE.inCaseTokengetsStuck.call(addressnBayRtW, {from: accounts[2]});
		const addressuvmhR8y = await Cover_ZapIn_General_V1ycDILLE.owner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1ycDILLE.nonReentrant.call({from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintJYAixw = BigInt("94")
		const Cover_ZapIn_General_V1KWSabNS = await Cover_ZapIn_General_V1.new(uintJYAixw, {from: accounts[3]});
		const uintMPtdnjy = BigInt("319")
		const addressIaUWKe = accounts[3]
		const addresstYtzUd = accounts[1]
		const addressCN5BTH7 = accounts[2]
		const uintaRKzSGA = BigInt("545")
		const addressTFaep0 = accounts[2]
		const uintDHxaiz6 = BigInt("821")
		await Cover_ZapIn_General_V1KWSabNS._enterCover.call(addressIaUWKe, uintMPtdnjy, {from: "0x0000000000000000000000000000000000000001"});
		const 
vue7pTE = await Cover_ZapIn_General_V1KWSabNS._enterPosition.call(addressTFaep0, uintaRKzSGA, addressCN5BTH7, addresstYtzUd, {from: accounts[0]});
		const boolSxdpXNr = await Cover_ZapIn_General_V1KWSabNS.isOwner.call({from: accounts[4]});
		const uint168tTTC6 = await Cover_ZapIn_General_V1KWSabNS.set_new_goodwill.call(uintDHxaiz6, {from: accounts[3]});
		await Cover_ZapIn_General_V1KWSabNS.withdraw.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintQ2cqBkx = BigInt("152")
		const Cover_ZapIn_General_V1kp84Xjw = await Cover_ZapIn_General_V1.new(uintQ2cqBkx, {from: accounts[1]});
		const bytefaDBrFt = "0x141016"
		const addressLGOkWQ = accounts[0]
		const addressAB9MZ0e = "0x0000000000000000000000000000000000000001"
		const uintIYPKcNa = BigInt("1973")
		const addresscocUS8J = accounts[0]
		const addressHBIqP4S = accounts[1]
		const addressjBBmCzY = accounts[1]
		const addressNud8nxv = accounts[1]
		const addressR0cyEm = accounts[3]
		const addressLJ58aEA = accounts[5]
		const uintFT4pnHI = BigInt("104")
		const addresssbzoETo = accounts[0]
		const addressR1atxmj = await Cover_ZapIn_General_V1kp84Xjw.owner.call({from: accounts[0]});
		const 
OxinXJ4 = await Cover_ZapIn_General_V1kp84Xjw.ZapIn.call(addressNud8nxv, addressjBBmCzY, addressHBIqP4S, addresscocUS8J, uintIYPKcNa, addressAB9MZ0e, addressLGOkWQ, bytefaDBrFt, {from: accounts[2]});
		const addressiRZsrag = await Cover_ZapIn_General_V1kp84Xjw.transferOwnership.call(addressR0cyEm, {from: accounts[5]});
		const 
OkENvsF = await Cover_ZapIn_General_V1kp84Xjw._getCoverDetails.call(addressLJ58aEA, {from: accounts[3]});
		await Cover_ZapIn_General_V1kp84Xjw._enterCover.call(addresssbzoETo, uintFT4pnHI, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintY0ARuwf = BigInt("286")
		const Cover_ZapIn_General_V1Qj8DDyL = await Cover_ZapIn_General_V1.new(uintY0ARuwf, {from: "0x0000000000000000000000000000000000000001"});
		const addressohnWzKF = accounts[1]
		const byteGnsejt0 = "0x11091c1d1d050c0414150c0a1f090300"
		const addressO18rcjI = accounts[5]
		const addressm9GxLH1 = accounts[3]
		const uintKTMZj0h = BigInt("423")
		const addressFPnDm0X = accounts[5]
		const addressACA8SsR = accounts[0]
		const addressBVkvG4E = accounts[2]
		const addresssfb34RT = accounts[1]
		await Cover_ZapIn_General_V1Qj8DDyL.stopInEmergency.call({from: accounts[5]});
		await Cover_ZapIn_General_V1Qj8DDyL.toggleContractActive.call({from: accounts[3]});
		const boolKBZuUT0 = await Cover_ZapIn_General_V1Qj8DDyL.isOwner.call({from: accounts[5]});
		const addressV9DFBj = await Cover_ZapIn_General_V1Qj8DDyL.transferOwnership.call(addressohnWzKF, {from: accounts[4]});
		await Cover_ZapIn_General_V1Qj8DDyL.renounceOwnership.call({from: accounts[2]});
		const 
N6QTMx = await Cover_ZapIn_General_V1Qj8DDyL.ZapIn.call(addresssfb34RT, addressBVkvG4E, addressACA8SsR, addressFPnDm0X, uintKTMZj0h, addressm9GxLH1, addressO18rcjI, byteGnsejt0, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintNx0L8WU = BigInt("152")
		const Cover_ZapIn_General_V1kp84Xjw = await Cover_ZapIn_General_V1.new(uintNx0L8WU, {from: accounts[1]});
		const addressVgL8Yi = accounts[4]
		const byteAUl2OvG = "0x141016"
		const addressfXNZr4r = accounts[0]
		const addresstyGqNKm = "0x0000000000000000000000000000000000000001"
		const uintgXW3Cqg = BigInt("1973")
		const addressPapJEb = accounts[0]
		const addresskBJSakT = accounts[1]
		const addresseT8cQkA = accounts[1]
		const addresskkLXcdD = accounts[1]
		const addresschSZ3Np = accounts[3]
		const byteuBZ8AZy = "0x1b05061e0a"
		const addressoXZzBxh = accounts[0]
		const addressRv4q1LF = accounts[2]
		const uintGU1n6c = BigInt("362")
		const addressb1FPC0X = accounts[4]
		const addressf4wrCYt = "0x0000000000000000000000000000000000000001"
		const addressKYOOdus = accounts[1]
		const addressj0gwf2R = accounts[1]
		const uintDgkDQF = BigInt("87")
		const addressZ7h1h2 = accounts[0]
		const addressV66hC9i = await Cover_ZapIn_General_V1kp84Xjw.inCaseTokengetsStuck.call(addressVgL8Yi, {from: accounts[1]});
		const 
OxinXJ4 = await Cover_ZapIn_General_V1kp84Xjw.ZapIn.call(addresskkLXcdD, addresseT8cQkA, addresskBJSakT, addressPapJEb, uintgXW3Cqg, addresstyGqNKm, addressfXNZr4r, byteAUl2OvG, {from: accounts[2]});
		const addressiRZsrag = await Cover_ZapIn_General_V1kp84Xjw.transferOwnership.call(addresschSZ3Np, {from: accounts[5]});
		const 
f2imq9w = await Cover_ZapIn_General_V1kp84Xjw.ZapIn.call(addressj0gwf2R, addressKYOOdus, addressf4wrCYt, addressb1FPC0X, uintGU1n6c, addressRv4q1LF, addressoXZzBxh, byteuBZ8AZy, {from: accounts[3]});
		await Cover_ZapIn_General_V1kp84Xjw._enterCover.call(addressZ7h1h2, uintDgkDQF, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintB6z9Ivd = BigInt("152")
		const Cover_ZapIn_General_V1kp84Xjw = await Cover_ZapIn_General_V1.new(uintB6z9Ivd, {from: accounts[1]});
		const addressnacHbb2 = "0x0000000000000000000000000000000000000001"
		const byte3s3NDx = "0x141016"
		const addressXPGTm9N = accounts[1]
		const addressKbfQ1W1 = "0x0000000000000000000000000000000000000001"
		const uint2vPiUR = BigInt("1990")
		const addressEzgHzLt = accounts[0]
		const addressS7KWddM = accounts[1]
		const addressgHDPQNR = accounts[1]
		const addressroZV4Ue = accounts[1]
		const addressuCJaW9A = await Cover_ZapIn_General_V1kp84Xjw.transferOwnership.call(addressnacHbb2, {from: accounts[1]});
		const 
OxinXJ4 = await Cover_ZapIn_General_V1kp84Xjw.ZapIn.call(addressroZV4Ue, addressgHDPQNR, addressS7KWddM, addressEzgHzLt, uint2vPiUR, addressKbfQ1W1, addressXPGTm9N, byte3s3NDx, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintF4xecr = BigInt("152")
		const Cover_ZapIn_General_V1kp84Xjw = await Cover_ZapIn_General_V1.new(uintF4xecr, {from: accounts[1]});
		const byteo78NZ17 = "0x141016"
		const addressyCAyVwm = accounts[0]
		const addressaXx9dpZ = "0x0000000000000000000000000000000000000001"
		const uintFwKWH2j = BigInt("1949")
		const addressC56ksxn = accounts[0]
		const addressTIoLGhi = accounts[1]
		const addressojU2WCM = accounts[1]
		const addressM0uB5hj = accounts[1]
		const addressoSgadq6 = accounts[0]
		const uintdWCDxj = BigInt("104")
		const addressaHYCHmV = accounts[0]
		await Cover_ZapIn_General_V1kp84Xjw.renounceOwnership.call({from: accounts[1]});
		const 
OxinXJ4 = await Cover_ZapIn_General_V1kp84Xjw.ZapIn.call(addressM0uB5hj, addressojU2WCM, addressTIoLGhi, addressC56ksxn, uintFwKWH2j, addressaXx9dpZ, addressyCAyVwm, byteo78NZ17, {from: accounts[2]});
		const addressq4ubfSg = await Cover_ZapIn_General_V1kp84Xjw.transferOwnership.call(addressoSgadq6, {from: accounts[3]});
		await Cover_ZapIn_General_V1kp84Xjw._enterCover.call(addressaHYCHmV, uintdWCDxj, {from: accounts[4]});
		await Cover_ZapIn_General_V1kp84Xjw.nonReentrant.call({from: accounts[4]});
	});
})